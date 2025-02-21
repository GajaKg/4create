import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { User } from '../../models/user.interface';

export interface UsersState extends EntityState<User> {}

export function createInitialState(): UsersState {
  return {
    entities: {
      1: { id: 1, name: "Bogdanovic", active: true },
      2: { id: 2, name: "Jokic", active: true },
      3: { id: 3, name: "Bodiroga", active: true },
      4: { id: 4, name: "Petrusev", active: true },
    },
    ids: [1, 2, 3, 4],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
