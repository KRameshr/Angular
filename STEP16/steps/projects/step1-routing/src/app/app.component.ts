import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5 ">
      <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/students"
            >Student</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" routerLink="/employees">Employee</a>
        </li>
      </ul>

      <router-outlet></router-outlet>
    </div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {}
