export class HeroService {
  herodata = {
    heroes: [
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
            poster: 'images/Untitled-1.1.png',
          },
          {
            title: 'Dark Knight',
            poster: 'images/Untitled-1.2.png',
          },
          {
            title: 'Dark Knight Raises',
            poster: 'images/Untitled-1.3.jpg',
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
            poster: 'images/Untitled-2.1.jpg',
          },
          {
            title: 'Superman Returns',
            poster: 'images/Untitled-2.2.jpeg',
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
            poster: 'images/Untitled-3.1.jpeg',
          },
          {
            title: 'Ironman 2',
            poster: 'images/Untitled-3.2.png',
          },
          {
            title: 'Ironman 3',
            poster: 'images/Untitled-3.3.png',
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
            poster: 'images/Untitled-4.1.png',
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
            poster: 'images/Untitled-5.1.png',
          },
          {
            title: 'Spiderman 2',
            poster: 'images/Untitled-5.2.png',
          },
          {
            title: 'Spiderman 3',
            poster: 'images/Untitled-5.3.png',
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
            poster: 'images/Untitled-6.1.jpeg',
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
            poster: 'images/Untitled-7.1.png',
          },
          {
            title: 'Spiderman',
            poster: 'images/Untitled-7.2.png',
          },
        ],
      },
    ],
  };
  getdata() {
    return this.herodata.heroes;
  }
  getSelecteddata(heroid: any) {
    return this.herodata.heroes[heroid - 1];
  }
}
