import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title | custom }}!</h1>
    <app-student-tdf></app-student-tdf>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'step1-pipes come on the in replacement of the jab wares ';
}
