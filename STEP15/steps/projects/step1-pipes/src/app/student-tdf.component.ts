import { Component } from '@angular/core';
import { Students } from './students';

@Component({
  selector: 'app-student-tdf',
  standalone: false,
  template: `
    <form action="">
      <p>student-tdf works!</p>
      <div class="container">
        <div class="form-group">
          <label for="">student Name:</label>
          <input
            type="text"
            placeholder="please enter name"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="">student Email:</label>
          <input
            type="email"
            placeholder="please enter email"
            class="form-control"
          />
        </div>
        <select class="custom-select">
          <option *ngFor="let sub of sub">{{ sub }}</option>
        </select>
        <br />
        <div class="form-group">
          <label for="">Gender</label>
          <input type="radio" name="gender" value="m" />male
          <input type="radio" name="gender" value="f" />female
        </div>
        <div class="form-group">
          <label for="">Gender</label>
          <input type="checkbox" name="check" value="m" />male
          <input type="checkbox" name="check" value="f" />female
        </div>
        <button class="btn btn-primary">submit</button>
      </div>
    </form>
    <hr />
    <div class="container">
      <form #studentForm="ngForm" (ngSubmit)="submf()">
        {{ studentForm.form.valid }}

        <hr />
        model :{{ student | json }}
        <br />
        mode2 :{{ studentOne | json }}
        <p>angular forms</p>
        <div class="form-group">
          <label for="">student Name:</label>
          <input
            pattern="[A-Za-z]+"
            type="text"
            placeholder="please enter name"
            class="form-control"
            [(ngModel)]="student.name"
            name="studentName"
          />
        </div>
        <div class="form-group">
          <label for="">student Email:</label>
          <input
            type="email"
            placeholder="please enter email"
            class="form-control"
            ngModel
            name="studentEmail"
            #studentEmail="ngModel"
            required
          />
        </div>
        <button class="btn btn-primary" [disabled]="studentForm.form.invalid">
          submit
        </button>
        {{ studentEmail.valid }}
        {{ studentEmail.touched }}
        <div *ngIf="studentEmail.invalid">email is required</div>

        <div *ngIf="submitted">
          form is submitted
          <br />
          Name : {{ student.name }}
          <br />
          Email : {{ student.email }}
        </div>
      </form>
    </div>
  `,
  styles: ``,
})
export class StudentTDFComponent {
  sub = ['hindi', 'Telugu', 'Math'];
  student = new Students('rames', 'ra@com'); // creat a object
  studentOne = new Students('usd', 'em,com');

  submitted: boolean = false;
  submf() {
    this.submitted = true;
    console.log(this.student);
  }
}
