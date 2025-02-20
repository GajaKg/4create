import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from '../../models/user.interface';

export interface UsersState {
  users: User[];
}

export function createInitialState(): UsersState {
  return {
    users: [
      {id: 1, name: "Bogdanovic", active: true},
      {id: 2, name: "Jokic", active: true},
      {id: 3, name: "Bodiroga", active: false},
      {id: 4, name: "Petrusev", active: true},
    ],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class UsersStore extends Store<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
