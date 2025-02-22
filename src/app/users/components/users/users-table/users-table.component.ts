import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/users/models/user.interface';
import { UserService } from 'src/app/users/store/users/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  private userService = inject(UserService);
  @Input() users!: User[];

  toggleUser(user: User) {
    this.userService.updateUser(user.id, { active: !user.active})
  }
}
