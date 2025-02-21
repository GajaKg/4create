import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { UsersQuery } from "../store/users/users.query";
import { inject, Injectable } from "@angular/core";
import {catchError, delay, map, Observable, of, take} from "rxjs";
import { User } from "../models/user.interface";

@Injectable({ providedIn: 'root' })
export class UniqueNameValidator {
  private usersQuery = inject(UsersQuery);
  users!: User[];

  validate(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      this.usersQuery.getUsers$.subscribe(users => this.users = users);

      return of(this.users).pipe(
        delay(2000),
        map((users: User[]) => {
          let isValid = true;
          users.forEach((user: User) => {
            if(user.name.toLowerCase() === control.value.toLowerCase()) {
              isValid = false
            }
          })
          return isValid ? null : { usernameTaken: true };
        }),
        catchError(() => of(null))
      )
    }
  }

}
