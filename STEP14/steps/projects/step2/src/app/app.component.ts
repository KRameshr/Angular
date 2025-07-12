import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
    <h1>Welcome to {{ title }}!</h1>
    <app-parent-componet></app-parent-componet>
  </div>`,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'step2';
}
