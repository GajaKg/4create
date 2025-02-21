import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UsersState, UsersStore } from './users.store';
import { map } from 'rxjs';
import { User } from '../../models/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {

  constructor(protected override store: UsersStore) {
    super(store);
  }

  get getUsers$() {
    return this.selectAll().pipe(
      map((users) => {
        return Object.values(users).map(user => user);
      })
    )
  }

  get getUid() {
    let uid = 1;
    this.getUsers$.pipe(
      map((users: User[]) => {

        users.forEach(user => {
          if (user.id != uid) {
            return
          } else {
            uid++
          }
        })

        return uid;
      })
    )
    .subscribe(id => uid = id);

    return uid;
  }

}
