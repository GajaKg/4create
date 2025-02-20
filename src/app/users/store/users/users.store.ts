import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Users } from './users.interface';

export interface UsersState {
  users: Users[];
}

export function createInitialState(): UsersState {
  return {
    users: [
      {id: 1, name: "Bogdan Bogdanovic", active: true},
      {id: 2, name: "Nikola Jokic", active: true},
      {id: 3, name: "Dejan Bodiroga", active: false},
      {id: 4, name: "Filip Petrusev", active: true},
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
