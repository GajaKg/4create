import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { SessionStore } from './users.store';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient) {}

  login() {
    // return this.http(endpoint).pipe(tap((user) => this.sessionStore.update(user)));
  }
}
