import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container justify-content-center align-items-center min-vh-100">
      <app-templateform></app-templateform>
      <app-reactivegroupform></app-reactivegroupform>
      <app-reactivebuilderform></app-reactivebuilderform>
    </div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'step1-forms';
}
