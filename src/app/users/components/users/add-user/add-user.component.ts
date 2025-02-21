import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/users/models/user.interface';
import { UsersStore } from 'src/app/users/store/users/users.store';
import { UniqueNameValidator } from 'src/app/users/validators/username.validator';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private uniqueNameValidator = inject(UniqueNameValidator);
  private usersStore = inject(UsersStore)
  private fb = inject(FormBuilder)
  protected userForm!: FormGroup;

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
      const newUser: User = {
        id: 5,
        name: this.userForm.value.name,
        active: this.userForm.value.active
      }
      this.usersStore.add(newUser)
    }
  }
}
