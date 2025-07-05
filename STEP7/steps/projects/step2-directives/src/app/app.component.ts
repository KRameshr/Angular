import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <Label for="cb">Show Tems and Conditions</Label>
    <input
      id="cb"
      type="checkbox"
      [checked]="showTerms"
      (change)="showTerms = !showTerms"
    />
    <br />
    <span *ngIf="!showTerms">Terms and Conditions are hidden</span>
    <fieldset *ngIf="showTerms">
      <legend>Terms & Conditions</legend>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
        architecto odit, modi sapiente explicabo mollitia earum commodi officia
        ipsam minus voluptate animi adipisci aliquam consequatur maxime
        provident doloribus nostrum sit.
      </div>
      <div>
        Repellat nam vel fuga optio pariatur velit, aspernatur excepturi, nulla
        magni? Impedit hic, natus adipisci numquam dignissimos obcaecati facere
        minima repellat, error tempore voluptate fuga? Molestias perferendis
        asperiores id, voluptatem!
      </div>
      <div>
        Fuga impedit modi, ratione tempore suscipit dolores earum veritatis
        distinctio excepturi deleniti porro, error provident ipsum nobis,
        doloribus libero animi nam ipsam. Excepturi ab a quod laudantium ipsam
        dolore quae.
      </div>
      <div>
        Incidunt animi unde veritatis est, sit enim, debitis quas beatae
        excepturi recusandae fuga temporibus natus velit rem autem optio.
        Officia labore nobis aliquam ducimus officiis voluptatem. Consequatur
        non, blanditiis quidem.
      </div>
      <div>
        Veritatis, repellat, explicabo. Excepturi et possimus cupiditate saepe
        dolores consequatur laboriosam sunt culpa voluptas fuga nostrum,
        doloribus voluptatem facilis, voluptate, quam id repellendus assumenda
        eaque. Ipsum repellat doloribus quaerat esse?
      </div>
    </fieldset>
    <div ngNonBindable>welcome to {{ Angular }} Training</div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'step2-directives';
  showTerms = true;
}
