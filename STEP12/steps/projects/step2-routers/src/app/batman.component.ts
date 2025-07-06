import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batman',
  standalone: false,
  template: `
    <h2>Batman Component works</h2>
    <article>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat
      amet autem ullam consequuntur ab, illum saepe voluptatibus, enim provident
      eius nam ut voluptatum eaque tempore molestiae asperiores, error
      accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      cupiditate ea maxime alias consequuntur rem nesciunt nobis obcaecati esse
      veniam cum optio distinctio, animi ipsa natus quod, quia ipsam ex.
    </article>
    <!-- static navigation -->
    <div class="input-item">
      <input type="text" #battext (input)="superquantity = battext.value" />
    </div>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" [routerLink]="['/superman', superquantity]"
          >superman arc</a
        >
      </li>
    </ul>

    <button (click)="clickhandler()" class="btn btn-primary">
      Click to chid componet
    </button>
  `,
  styles: `.input-item{
    margin-top:20px
  }`,
})
export class BatmanComponent {
  superquantity = 'nav';
  constructor(private rtr: Router) {}
  clickhandler() {
    this.rtr.navigate(['/superman', Math.round(Math.random() * 100)]);
  }
}
