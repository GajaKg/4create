import { Component, inject, OnInit } from '@angular/core';
import { count, filter, map, Observable, OperatorFunction, scan, tap } from 'rxjs';
import { User } from '../../models/user.interface';
import { UsersQuery } from '../../store/users/users.query';
import { HashMap } from '@datorama/akita';
import { UserService } from '../../store/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private userService = inject(UserService);
  protected newUserIsActive: boolean = false;
  protected newUserToggleModal: boolean = false;
  protected listUsers: User[] = [];

  ngOnInit(): void {
    this.userService.fetchUsers().pipe(
      tap((users: User[]) => {
        const foundInactive = users.find((user: any) => user.active === false);
        this.newUserIsActive = foundInactive ? false : users.length < 5 ? true : false;
      })
    ).subscribe((users: User[]) => {
      this.listUsers = users;
    })
  }

  openModal() {
    this.newUserToggleModal = true;
  }
}
