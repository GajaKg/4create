import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UsersState, UsersStore } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends Query<UsersState> {
  getUsers$ = this.select('entities');

  constructor(protected override store: UsersStore) {
    super(store);
  }
}
