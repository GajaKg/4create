import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../../models/user.interface';
import { UserService } from '../../store/users/users.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly userService = inject(UserService);
  protected newUserIsActive: boolean = false;
  protected newUserToggleModal: boolean = false;
  protected listUsers: User[] = [];

  ngOnInit(): void {
    this.userService.fetchUsers().pipe(
      takeUntilDestroyed(this.destroyRef),
      tap((users: User[]) => {
        // check if there is inactive user to disable add new user button
        const foundInactive = users.find((user: any) => user.active === false);
        this.newUserIsActive = foundInactive ? false : users.length < 5 ? true : false;
      })
    ).subscribe((users: User[]) => {
      this.listUsers = users;
    })
  }

  openModal() {
    this.newUserToggleModal = true;
  }
}
