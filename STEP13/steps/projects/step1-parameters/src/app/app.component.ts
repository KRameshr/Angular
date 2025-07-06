import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <h1>Welcome to {{ title }}!</h1>
    <app-intel></app-intel>
    <app-intel></app-intel>
    <app-intel></app-intel>
    <app-intel></app-intel>
    <app-intel></app-intel>
    <app-intel></app-intel>
    <div style="clear: both;"></div>
    <intel>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam natus
        repellendus assumenda distinctio veniam, quasi mollitia quia reiciendis
        necessitatibus! Modi, sapiente. Eum at expedita aperiam magnam atque
        suscipit alias ad?
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo officiis
        facilis quas assumenda, hic consectetur debitis aliquam! Fugiat
        laboriosam eum, a quaerat enim, voluptas, perspiciatis laudantium
        repellendus expedita commodi consectetur?
      </p>
    </intel>
  </div> `,
  standalone: false,
  styles: [
    `
      .intel {
        padding: 20px;
        margin-bottom: 100px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'step1-parameters';
}
