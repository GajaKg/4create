import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/models/user.interface';
import { UsersQuery } from 'src/app/users/store/users/users.query';
import { UsersStore } from 'src/app/users/store/users/users.store';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  usersStore = inject(UsersStore)
  usersQuery = inject(UsersQuery)

  users!: { [key: number]: User };

  ngOnInit() {
    this.usersQuery.getUsers$.subscribe((res: any) => this.users = res)
  }

  toggleUser(user: User) {
    console.log(user, !user.active)
    // this.usersStore.add({id: 5, name: "ADS ASd AS a", active: true},)
    this.usersStore.update(user.id, { active: !user.active})
  }
}
