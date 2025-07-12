import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: false,
  template: `
    <p>student works!</p>
    <ul>
      <li (click)="selectStudent(student)" *ngFor="let student of student">
        {{ student.id }} {{ student.name }}
      </li>
    </ul>
  `,
  styles: ``,
})
export class StudentComponent {
  constructor(private router: Router) {}
  student = [
    { id: 1, name: 'student1' },
    { id: 2, name: 'student2' },
    { id: 3, name: 'student3' },
    { id: 4, name: 'student4' },
  ];
  selectStudent(student: { id: any; name: string }) {
    this.router.navigate(['/students', student.id, student.name]);
  }
}
