import { Component, Input } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <ul class="nav">
      @for (hero of appdata; track hero.sl) {
      <li class="nav-item">
        <a class="nav-link" href="#">{{ hero.title }}</a>
      </li>
      }
    </ul>
  `,
  styles: ``,
})
export class HeaderComponent {
  // @Input() data: any = [];
  appdata: any = [];
  // hs: HeroService = new HeroService();
  constructor(public hs: HeroService) {
    this.appdata = this.hs.getdata();
  }
}
