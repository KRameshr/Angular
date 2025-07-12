import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-fomrs',
  standalone: false,
  template: `
    <div>
      <form [formGroup]="registrationForm" (ngSubmit)="submitForm()">
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Student Name</label>
          <input
            #txt
            formControlName="studentName"
            type="text"
            class="form-control"
            id="exampleInputName1"
          />
        </div>
        <div *ngIf="load()">name is required</div>

        {{ load() }}

        class :{{ txt.className }}

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            formControlName="studentEmail"
          />
        </div>

        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option *ngFor="let opinion of opinion" value="opinion">
            {{ opinion }}
          </option>
        </select>

        <div class="mt-3">
          <label class="form-check-label" for="flexRadioDefault">
            Gender
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Female
            </label>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                formControlName="gender"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Male
              </label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-check-label m-2" for="flexCheckDefault">
            lives In
          </label>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              bangalor
            </label>
          </div>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Mysore
            </label>
          </div>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Chennai
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <br />
        <input
          type="button"
          class="btn btn-primary mt-2"
          (click)="load()"
          value="iniData"
        />
      </form>
      {{ registrationForm.value | json }}
    </div>
  `,
  styles: ``,
})
export class FomrsComponent {
  opinion = ['One', 'Two', 'Three', 'Four', 'Five'];
  // constructor(private fb: FormBuilder) {}

  registrationForm = new FormGroup({
    studentName: new FormControl('', Validators.required),
    studentEmail: new FormControl('@gmail.com'),
  });
  load() {
    // this.registrationForm.setValue({
    //   studentName: 'Ramesh',
    //   studentEmail: 'ke@gmail.com',
    // });
    this.registrationForm.patchValue({
      studentName: 'Ramesh',
    });
  }

  customvalidator(control: AbortController): { [key: string]: any } | null {
    console.log(control);
    return {};
  }

  submitForm() {
    console.log(this.registrationForm.value);
  }
  constructor(private _service: RegistrationService) {
    this._service.postData(this.registrationForm.value).subscribe(
      (data) => console.log('sucess' + data),
      (err) => console.log('sucess' + err)
    );
  }
}
