import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users/store/users/users.interface';
import { UsersQuery } from 'src/app/users/store/users/users.query';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users$!: Observable<Users[]>;

  constructor(private usersQuery: UsersQuery) {}

  ngOnInit() {
    this.users$ = this.usersQuery.getUsers$;
    // this.users$.subscribe(n => console.log(n));
  }
}
