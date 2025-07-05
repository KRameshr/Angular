import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivebuilderform',
  standalone: false,
  template: `
    <p class="p-m" style="textalign:center">{{ title }}</p>
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh;"
    >
      <div class="form-container" style="max-width: 500px; width: 100%;">
        <h5 class="mb-4 text-center text-primary">Login</h5>
        <form method="get" action="#" [formGroup]="userForm">
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input
              formControlName="username"
              name="uname"
              class="form-control"
              id="username"
            />
            <div
              *ngIf="
                userForm.get('username').invalid &&
                userForm.get('username').touched
              "
              class="error form-text"
            >
              Enter your Name Here
            </div>
          </div>
          <div class="mb-3">
            <label for="userage" class="form-label">User Age</label>
            <input
              formControlName="userage"
              type="number"
              name="uage"
              class="form-control"
              id="userage"
            />
            <div
              *ngIf="
                userForm.get('userage').invalid &&
                userForm.get('userage').touched
              "
              class="error form-text"
            >
              Enter Your Age Here
            </div>
          </div>
          <div class="mb-3">
            <label for="usermail" class="form-label">User Email address</label>
            <input
              formControlName="useremail"
              type="email"
              name="umail"
              class="form-control"
              id="usermail"
            />
            <div
              *ngIf="
                userForm.get('useremail').invalid &&
                userForm.get('useremail').touched
              "
              class="error form-text"
            >
              Provide your eMail id
            </div>
          </div>
          <div class="mb-3">
            <button
              type="submit"
              class="btn btn-primary"
              (click)="clickHandler()"
            >
              Register
            </button>
          </div>
        </form>

        <button class="btn btn-warning mb-3" (click)="fillName()">
          Fill Name
        </button>
        &nbsp;
        <button class="btn btn-warning mb-3" (click)="fullDetails()">
          Full Info of the user
        </button>
        <p>
          <span>User Name : {{ userForm.get('username').value }}</span>
          <span>User Age : {{ userForm.get('userage').value }}</span>
          <span>User eMail : {{ userForm.get('useremail').value }}</span>
        </p>
        <ol>
          <li *ngIf="userForm.get('username').touched">User Name is Touched</li>
          <li *ngIf="userForm.get('username').untouched">
            User Name is Untouched
          </li>
          <li *ngIf="userForm.get('username').pristine">
            User Name is Prestine
          </li>
          <li *ngIf="userForm.get('username').dirty">User Name is Dirty</li>
          <li *ngIf="userForm.get('username').valid">User Name is Valid</li>
          <li *ngIf="userForm.get('username').invalid">User Name is Invalid</li>
        </ol>
        <ol>
          <li *ngIf="userForm.get('userage').touched">User Age is Touched</li>
          <li *ngIf="userForm.get('userage').untouched">
            User Age is Untouched
          </li>
          <li *ngIf="userForm.get('userage').pristine">User Age is Prestine</li>
          <li *ngIf="userForm.get('userage').dirty">User Age is Dirty</li>
          <li *ngIf="userForm.get('userage').valid">User Age is Valid</li>
          <li *ngIf="userForm.get('userage').invalid">User Age is Invalid</li>
        </ol>
        <ol>
          <li *ngIf="userForm.get('useremail').touched">
            User eMail is Touched
          </li>
          <li *ngIf="userForm.get('useremail').untouched">
            User eMail is Untouched
          </li>
          <li *ngIf="userForm.get('useremail').pristine">
            User eMail is Prestine
          </li>
          <li *ngIf="userForm.get('useremail').dirty">User eMail is Dirty</li>
          <li *ngIf="userForm.get('useremail').valid">User eMail is Valid</li>
          <li *ngIf="userForm.get('useremail').invalid">
            User eMail is Invalid
          </li>
        </ol>
      </div>
    </div>
  `,
  styles: [
    `
      .p-m {
        margin-top: 250px;
      }
      .error {
        color: red;
      }
      input.ng-invalid.ng-touched {
        background-color: rgba(240, 128, 128, 0.1);
      }
      input.ng-valid.ng-touched {
        background-color: rgba(143, 188, 139, 0.1);
      }

      input.ng-invalid.ng-touched {
        background-color: #e3f2fd; /* Light blue background */
        border: 2px solidrgb(58, 59, 61); /* Bootstrap primary color */
      }
      .form-control-custom:focus {
        background-color: #fff;
        border-color: #6610f2; /* Bootstrap purple */
        box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.25);
      }
      .form-container {
        background-color: #ffffff; /* White background for the card */
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        margin-bottom: 100px;
      }

      .form-control-custom {
        background-color: #e3f2fd;
        border: 2px solid #0d6efd;
      }

      .form-control-custom:focus {
        background-color: #fff;
        border-color: #6610f2;
        box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.25);
      }
    `,
  ],
})
export class ReactivebuilderformComponent {
  title = 'Reactive Builder Form';
  userForm: any;
  constructor(private fb: FormBuilder) {
    // empty
  }
  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      userage: [
        '',
        [Validators.required, Validators.min(18), Validators.max(90)],
      ],
      useremail: ['', [Validators.required, Validators.pattern('.+@.+')]],
    });
  }
  clickHandler() {
    alert(this.userForm.get('userage').value);
  }
  fillName() {
    this.userForm.patchValue({
      username: 'Bruce Wayne',
    });
  }
  fullDetails() {
    this.userForm.setValue({
      username: 'Peter Parker',
      userage: 19,
      useremail: 'peter@parker.com',
    });
  }
}
