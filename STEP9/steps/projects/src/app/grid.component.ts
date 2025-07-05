import { Component, Input } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-grid',
  standalone: false,
  template: `
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
        @for (hero of appdata; track hero.sl) {
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
  `,
  styles: [
    `
      td img {
        margin: 2px;
      }
    `,
  ],
})
export class GridComponent {
  // @Input('griddata') data: any = [];
  appdata: any = [];
  // hs: HeroService = new HeroService();
  constructor(public hs: HeroService) {
    this.appdata = this.hs.getdata();
  }
}
