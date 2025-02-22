import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/users/models/user.interface';
import { UsersQuery } from 'src/app/users/store/users/users.query';
import { UserService } from 'src/app/users/store/users/users.service';
import { UniqueNameValidator } from 'src/app/users/validators/username.validator';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  private uniqueNameValidator = inject(UniqueNameValidator);
  private userService = inject(UserService)
  private usersQuery = inject(UsersQuery)
  private fb = inject(FormBuilder)
  userForm!: FormGroup;
  @Output() closeModal = new EventEmitter()

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', {
        validators: [Validators.required],
        asyncValidators: [this.uniqueNameValidator.validate()]
      }],
      active: [false],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const uid = this.usersQuery.getUid;
      const newUser: User = {
        id: uid,
        name: this.userForm.value.name,
        active: this.userForm.value.active
      }

      this.userService.addNewUser(newUser)
      this.userForm.reset()
      this.closeModal.emit()
    }
  }
}
