import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/users/models/user.interface';
import { UserService } from 'src/app/users/store/users/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  private userService = inject(UserService);
  @Input() users!: User[];

  ngOnInit() {}

  toggleUser(user: User) {
    this.userService.updateUser(user.id, { active: !user.active})
  }
}
