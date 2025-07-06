import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h5>{{ title }}</h5>
      <hr />
      <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['/']">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['product']">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['service']">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['service', superquantity]"
            >Services 505</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['about']">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['contact']">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['flash']">Flash</a>
        </li>
      </ul>
      <hr />
      <input #ti type="text" (input)="superquantity = ti.value" />
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'Routes Navigation ';
  superquantity = '';
}
