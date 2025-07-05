import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container ">
      <h1>Welcome to {{ title }}</h1>
      <div class="row row-cols-1 row-cols-lg-5  g-2 g-lg-3 ">
        @for (user of appdata.data; track user.id) {
        <div class="col p-3 border bg-light ">
          <img [src]="user.avatar" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              {{ user.first_name }} {{ user.last_name }}
            </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="mailto:{{ user.email }}" class="btn btn-primary"
              >Mail to
            </a>
          </div>
        </div>
        }
      </div>
    </div>
  `,
  standalone: false,
  styles: [``],
})
export class AppComponent {
  title = 'external--services--data';
  appdata: any = {};
  constructor(private udata: UserService) {
    this.udata.getData().subscribe((res) => (this.appdata = res));
  }
}
