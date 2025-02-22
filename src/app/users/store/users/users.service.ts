import { inject, Injectable } from '@angular/core';
import { UsersStore } from './users.store';
import { UsersQuery } from './users.query';
import { Observable } from 'rxjs';
import { User } from '../../models/user.interface';
import { ID } from '@datorama/akita/src/lib/types';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersQuery = inject(UsersQuery);
  private usersStore = inject(UsersStore);

  fetchUsers(): Observable<User[]> {
    return this.usersQuery.getUsers$;
  }

  addNewUser(newUser: User) {
    this.usersStore.add(newUser);
  }

  updateUser(id: ID, user: Partial<User>) {
    this.usersStore.update(id, user);
  }

  getUid(): number {
    return this.usersQuery.getUid;
  }
}
