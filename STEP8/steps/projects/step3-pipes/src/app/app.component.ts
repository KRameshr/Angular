import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="center">Works and {{ title }}</h1>
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
            <th>Delivered Items</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let hero of herolist">
            <td>{{ hero.sl }}</td>
            <td>{{ hero.title | uppercase }}</td>
            <td><img width="150" [src]="hero.poster" [alt]="hero.title" /></td>
            <td>
              {{ hero.firstname | gen : hero.gender }} {{ hero.lastname }}
            </td>
            <td>{{ hero.type }}</td>
            <td>
              {{ hero.ticketprice | currency : 'INR ' : 'code' : '3.2-3' }}
            </td>
            <td>{{ hero.releasedate | date : 'dd -MMMM- yyyy' }}</td>
            <td>{{ hero.movieslist.length }}</td>
          </tr>
        </tbody>
      </table>
      <div>{{ herolist | json }}</div>
    </div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'Experiences';
  herolist = [
    {
      sl: 1,
      title: 'After Life Death',
      gender: 'male',
      firstname: 'bruce',
      lastname: 'Wayne',
      type: 'The One-Question Format',
      ticketprice: 300,
      releasedate: '12/12/2024',
      poster: 'images/Untitled-1.png',
      movieslist: [
        {
          title: 'Batman Begins',
          poster: 'assets/images/bat1_tn.jpg',
        },
        {
          title: 'Dark Knight',
          poster: 'assets/images/bat2_tn.jpg',
        },
        {
          title: 'Dark Knight Raises',
          poster: 'assets/images/bat3_tn.jpg',
        },
      ],
    },
    {
      sl: 2,
      title: 'Trade War',
      gender: 'male',
      firstname: 'Clark',
      lastname: 'Kent',
      type: 'Dramatic Scenes/Live Action',
      ticketprice: 500,
      releasedate: '1/27/2024',
      poster: 'images/Untitled-2.png',
      movieslist: [
        {
          title: 'Superman The Movie',
          poster: 'assets/images/super1_tn.jpg',
        },
        {
          title: 'Superman Returns',
          poster: 'assets/images/super2_tn.jpg',
        },
        {
          title: 'Superman Man of Steel',
          poster: 'assets/images/super3_tn.jpg',
        },
      ],
    },
    {
      sl: 3,
      title: 'betting',
      gender: 'male',
      firstname: 'Tony',
      lastname: 'Stark',
      type: '	The One-Question Format',
      ticketprice: 400,
      releasedate: '1/27/2024',
      poster: 'images/Untitled-3.png',
      movieslist: [
        {
          title: 'Ironman',
          poster: 'assets/images/iron1_tn.jpg',
        },
        {
          title: 'Ironman 2',
          poster: 'assets/images/iron2_tn.jpg',
        },
        {
          title: 'Ironman 3',
          poster: 'assets/images/iron3_tn.jpg',
        },
      ],
    },
    {
      sl: 4,
      title: 'NEws',
      gender: 'male',
      firstname: 'Kit',
      lastname: 'Walker',
      type: 'News YouTube Thumbnail',
      ticketprice: 400.6456,
      releasedate: '1/27/2024',
      poster: 'images/Untitled-4.png',
      movieslist: [
        {
          title: 'The Phantom Slam Evilz',
          poster: 'assets/images/phantom1_tn.jpg',
        },
      ],
    },
    {
      sl: 5,
      title: 'BILL',
      gender: 'male',
      firstname: 'Peter',
      lastname: 'Parker',
      type: 'News YouTube Thumbnail',
      ticketprice: 700.3456,
      releasedate: '9/26/2024',
      poster: 'images/Untitled-5.jpg',
      movieslist: [
        {
          title: 'Spiderman',
          poster: 'assets/images/spider1_tn.jpg',
        },
        {
          title: 'Spiderman 2',
          poster: 'assets/images/spider2_tn.jpg',
        },
        {
          title: 'Spiderman 3',
          poster: 'assets/images/spider3_tn.jpg',
        },
      ],
    },
    {
      sl: 6,
      title: 'ZIDDI  BANO',
      gender: 'female',
      firstname: 'Princess',
      lastname: 'Diana',
      type: 'Personalized Headshot',
      ticketprice: 300.3456978978,
      releasedate: '11/26/2024',
      poster: 'images/Untitled-6.png',
      movieslist: [
        {
          title: 'Spiderman',
          poster: 'assets/images/spider1_tn.jpg',
        },
      ],
    },
    {
      sl: 7,
      title: 'Daily News',
      gender: 'female',
      firstname: 'Princess',
      lastname: 'Diana',
      type: ' Featured Products',
      ticketprice: 300.3456978978,
      releasedate: '11/26/2024',
      poster: 'images/Untitled-7.png',
      movieslist: [
        {
          title: 'Spiderman',
          poster: 'assets/images/spider1_tn.jpg',
        },
      ],
    },
  ];
}
