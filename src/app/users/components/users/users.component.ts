import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../../models/user.interface';
import { UserService } from '../../store/users/users.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly userService = inject(UserService);
  newUserIsInactive: boolean = false;
  newUserToggleModal: boolean = false;
  listUsers: User[] = [];

  ngOnInit(): void {
    this.userService.fetchUsers().pipe(
      takeUntilDestroyed(this.destroyRef),
      tap((users: User[]) => {
        this.newUserIsInactive = users.some((user: User) => !user.active) || users.length > 4;
        this.listUsers = users;
      })
    ).subscribe();
  }
}
