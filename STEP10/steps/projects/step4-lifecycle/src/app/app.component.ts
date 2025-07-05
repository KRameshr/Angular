import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-child [message]="appmessage"></app-child>
    <input #ti type="text" (change)="appmessage = ti.value" />
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'step4-lifecycle';
  appmessage = '';
}
