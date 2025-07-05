import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  standalone: false,
  template: ` <p>{{ title }}</p>
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh;"
    >
      <div class="form-container" style="max-width: 500px; width: 100%;">
        <h5 class="mb-4 text-center text-primary">Login</h5>
        <form
          #myform="ngForm"
          method="get"
          action="#"
          (submit)="clickHandler(myform, $event)"
        >
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input
              #username="ngModel"
              [(ngModel)]="userinfo.name"
              type="text"
              required
              name="uname"
              class="form-control"
              id="username"
              class="form-control form-control-custom"
            />
            <div
              *ngIf="username.touched && username.invalid"
              class="error form-text"
            >
              Enter your Name Here
            </div>
          </div>
          <div class="mb-3">
            <label for="userage" class="form-label">User Age</label>
            <input
              #userage="ngModel"
              [(ngModel)]="userinfo.age"
              type="number"
              min="18"
              max="90"
              step="1"
              required
              name="uage"
              class="form-control"
              id="userage"
              class="form-control form-control-custom"
            />
            <div
              *ngIf="userage.touched && userage.invalid"
              class="error form-text"
            >
              Enter Your Age Here
            </div>
          </div>
          <div class="mb-3">
            <label for="usermail" class="form-label">User Email address</label>
            <input
              #usermail="ngModel"
              [(ngModel)]="userinfo.email"
              type="email"
              required
              pattern=".+@.+"
              name="umail"
              class="form-control"
              id="usermail"
              class="form-control form-control-custom"
            />
            <div
              *ngIf="usermail.touched && usermail.invalid"
              class=" error form-text"
            >
              Provide your eMail id
            </div>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
        <p>
          <span>User Name : {{ userinfo.name }}</span>
          <span>User Age : {{ userinfo.age }}</span>
          <span>User eMail : {{ userinfo.email }}</span>
        </p>
        <ol>
          <li *ngIf="username.touched">User Name is Touched</li>
          <li *ngIf="username.untouched">User Name is Untouched</li>
          <li *ngIf="username.pristine">User Name is Prestine</li>
          <li *ngIf="username.dirty">User Name is Dirty</li>
          <li *ngIf="username.valid">User Name is Valid</li>
          <li *ngIf="username.invalid">User Name is Invalid</li>
        </ol>
        <ol>
          <li *ngIf="userage.touched">User Age is Touched</li>
          <li *ngIf="userage.untouched">User Age is Untouched</li>
          <li *ngIf="userage.pristine">User Age is Prestine</li>
          <li *ngIf="userage.dirty">User Age is Dirty</li>
          <li *ngIf="userage.valid">User Age is Valid</li>
          <li *ngIf="userage.invalid">User Age is Invalid</li>
        </ol>
        <ol>
          <li *ngIf="usermail.touched">User eMail is Touched</li>
          <li *ngIf="usermail.untouched">User eMail is Untouched</li>
          <li *ngIf="usermail.pristine">User eMail is Prestine</li>
          <li *ngIf="usermail.dirty">User eMail is Dirty</li>
          <li *ngIf="usermail.valid">User eMail is Valid</li>
          <li *ngIf="usermail.invalid">User eMail is Invalid</li>
        </ol>
      </div>
    </div>`,
  styles: [
    `
      .error {
        color: red;
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
        margin: 20px;
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
export class TemplateformComponent {
  title = 'Template Forms in Angular';
  userinfo = {
    name: '',
    age: 0,
    email: '',
  };
  clickHandler(formcontent: any, evt: any) {
    evt.preventDefault();
    // console.log(evt.target.tagName)
    // console.log(formcontent.form.controls.uage.value)
    // alert(formcontent.form)
    var uage = Number(formcontent.form.controls.uage.value);
    if (uage < 18) {
      alert('you are too young to join us');
    } else if (uage > 90) {
      alert('you are too old to join us');
    } else {
      alert('welcome to our company');
      evt.target.submit();
      // console.log(evt.target);
      // console.log(formcontent)
    }
  }
}
