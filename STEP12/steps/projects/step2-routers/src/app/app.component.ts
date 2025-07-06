import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container ">
      <ul class="nav m-3 ">
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['/']">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['batman']">batman</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['superman']">superman</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['superman', superq]"
            >superman arc</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['wouderwomen']"
            >wouderwomen</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['cyborg']">cyborg</a>
        </li>
      </ul>
      <hr />
      <div class="input-item">
        <input #ti type="text" (input)="superq = ti.value" />
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: false,
  styles: [
    `
      .input-item {
        margin: 20px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'step2-routers';
  superq = '';
}
