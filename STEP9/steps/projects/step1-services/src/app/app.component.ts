import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Works and {{ title }}</h1>
      <app-header></app-header>
      <hr />
      <app-grid></app-grid>
    </div>
  `,
  standalone: false,
  styles: [``],
})
export class AppComponent {
  title = 'services';
}
