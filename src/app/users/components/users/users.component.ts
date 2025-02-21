import { Component, inject, OnInit } from '@angular/core';
import { count, filter, map, Observable, scan } from 'rxjs';
import { User } from '../../models/user.interface';
import { UsersQuery } from '../../store/users/users.query';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersQuery = inject(UsersQuery);

  newUserIsActive: boolean = false;

  ngOnInit(): void {
    this.usersQuery.getUsers$.pipe(
      map((users: User[]) => {
        let foundInactive = users.find(user => user.active === false);

        if (foundInactive) {
          return false;
        } else {
          return users.length < 5 ? true : false;
        }
      })
    ).subscribe((res: boolean) => {
      this.newUserIsActive = res;
    })
  }

  openModal() {

  }
}
