import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  standalone: true,
  template: `<div>
    <h2>Welcome to Angular</h2>
    <h3>{{ title }}</h3>

    <p>This is my first Angular component.</p>
  </div> `,
})
export class AppComponent {
  title = 'World';
}
