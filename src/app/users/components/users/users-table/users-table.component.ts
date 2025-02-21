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
  private usersStore = inject(UsersStore);
  private usersQuery = inject(UsersQuery);

  users!: User[];

  ngOnInit() {
    this.usersQuery.getUsers$.subscribe((users: User[]) => this.users = users)
  }

  toggleUser(user: User) {
    this.usersStore.update(user.id, { active: !user.active})
  }
}
