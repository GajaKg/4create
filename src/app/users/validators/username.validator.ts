import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject, Injectable } from "@angular/core";
import { catchError, delay, map, Observable, of } from "rxjs";

import { User } from "../models/user.interface";
import { UserService } from "../store/users/users.service";

@Injectable({ providedIn: 'root' })
export class UniqueNameValidator {
  private readonly destroyRef = inject(DestroyRef);
  private readonly userService = inject(UserService)
  private users!: User[];

  validate(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      this.userService.fetchUsers().pipe(
        takeUntilDestroyed(this.destroyRef),
      ).subscribe((users: User[]) => this.users = users);

      return of(this.users).pipe(
        delay(2000),
        map((users: User[]) => {
          let isValid = true;
          const inputValue: string = control.value.trim().toLowerCase();
          users.forEach((user: User) => {
            if(user.name.toLowerCase().trim() === inputValue) {
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
