import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniqueNameValidator } from 'src/app/users/validators/username.validator';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  protected userForm!: FormGroup;
  private uniqueNameValidator = inject(UniqueNameValidator);

  constructor(private fb: FormBuilder) { }

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
      console.log("onSubmit", this.userForm.value);
    }
  }
}
