import { Component, inject, OnInit } from '@angular/core';
import { count, filter, map, Observable, OperatorFunction, scan } from 'rxjs';
import { User } from '../../models/user.interface';
import { UsersQuery } from '../../store/users/users.query';
import { HashMap } from '@datorama/akita';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private usersQuery = inject(UsersQuery);
  protected newUserIsActive: boolean = false;
  protected newUserToggleModal: boolean = false;

  ngOnInit(): void {
    this.usersQuery.getUsers$.pipe(
      map((users: User[]) => {
        const valuesArray = Object.values(users ?? {});
        const foundInactive = valuesArray.find((user: any) => user.active === false);
        return foundInactive ? false : valuesArray.length < 5 ? true : false;
      })
    ).subscribe((res: boolean) => {
      this.newUserIsActive = res;
    })
  }

  openModal() {
    this.newUserToggleModal = true;
  }
}
