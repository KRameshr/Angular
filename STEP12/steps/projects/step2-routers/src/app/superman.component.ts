import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superman',
  standalone: false,
  template: `
    <h2>Superman Component works</h2>
    <h3>display :{{ stock === '' ? 'Not send' : stock }}</h3>
    <article>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat
      amet autem ullam consequuntur ab, illum saepe voluptatibus, enim provident
      eius nam ut voluptatum eaque tempore molestiae asperiores, error
      accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      cupiditate ea maxime alias consequuntur rem nesciunt nobis obcaecati esse
      veniam cum optio distinctio, animi ipsa natus quod, quia ipsam ex.
    </article>
  `,
  styles: ``,
})
export class SupermanComponent {
  stock = '';
  constructor(private ar: ActivatedRoute) {}
  ngOnInit() {
    this.stock = this.ar.snapshot.params['quantity'];
  }
}
