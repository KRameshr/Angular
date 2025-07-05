import { Component } from '@angular/core';
import { HeroHtttpServices } from './hero.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <span>Clik Here </span>
      <button
        (click)="clickhandeler()"
        class="btn btn-primary mb-3 mt-3 "
        type="submit"
      >
        Get Data
      </button>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>Sl #</th>
            <th>Title</th>
            <th>Poster</th>
            <th>Client Full Name</th>
            <th>Type</th>
            <th>Tumbnail Price</th>
            <th>Edited Date</th>
            <th>Used Items</th>
          </tr>
        </thead>
        <tbody>
          @for (hero of appdata.heroList; track hero.sl) {
          <tr>
            <td>{{ hero.sl }}</td>
            <td>{{ hero.title | uppercase }}</td>
            <td><img width="150" [src]="hero.poster" [alt]="hero.title" /></td>
            <td>{{ hero.firstname }} {{ hero.lastname }}</td>
            <td>{{ hero.type }}</td>
            <td>
              {{ hero.ticketprice | currency : 'INR ' : 'code' : '3.2-3' }}
            </td>
            <td>{{ hero.releasedate | date : 'dd -MMMM- yyyy' }}</td>
            <td>
              @for (movie of hero.movieslist ; track movie.title) {
              <img
                width="70"
                height="65"
                [src]="movie.poster"
                [alt]="movie.title"
              />
              }
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  standalone: false,
  styles: [
    `
      img {
        gap: 20px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'step1-http-server';
  appdata: any = [];
  constructor(private hs: HeroHtttpServices) {}
  clickhandeler() {
    // alert('do you want the data');
    this.hs.getHeroData().subscribe((res) => (this.appdata = res));
  }
}
