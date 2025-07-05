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
    <h2 *ngIf="showTerms">{{ title }}</h2>
    <h2 *ngIf="!showTerms">{{ 'title is hiidden' }}</h2>
    <span *ngIf="showTerms">{{ title }}</span>
    <br />
    <ng-template [ngIf]="showTerms">{{ title }}</ng-template>
    <br />
    @if(showTerms === true) {
    <button>Click Me</button>
    }@else if(power === 3){
    <button>Click Me power</button>
    }@else {
    <button>Click Me power false</button>
    }
    <br />
    <input
      #pow
      type="range"
      min="0"
      max="5"
      step="1"
      [value]="power"
      (input)="increasePower(pow.value)"
    />
    <ul [ngSwitch]="power">
      <li *ngSwitchCase="1">power is 1</li>
      <li *ngSwitchCase="2">power is 2</li>
      <li *ngSwitchCase="3">power is 3</li>
      <li *ngSwitchCase="4">power is 4</li>
      <li *ngSwitchCase="5">power is 5</li>

      <li *ngSwitchDefault>power is not assigned</li>
    </ul>
    @switch (power) { @case (1) {
    <li>Power is 1</li>
    } @case (2) {
    <li>Power is 2</li>
    } @case (3) {
    <li>Power is 3</li>
    } @case (4) {
    <li>Power is 4</li>
    } @case (5) {
    <li>Power is 5</li>
    } @default {
    <li>Power is not assigned</li>
    } }
    <div [class.box]="showTerms" [class.redbox]="power > 2">I am box</div>
    <div [ngClass]="{ brdr: showTerms === true, redbox: power > 2 }">
      I am box
    </div>
    <div
      [ngStyle]="{ 'background-color': power > 2 ? 'darkseagreen' : 'orange' }"
    >
      I am box
    </div>
    <ul>
      <li>{{ avengers[0] }}</li>
      <li>{{ avengers[1] }}</li>
      <li>{{ avengers[2] }}</li>
      <li>{{ avengers[3] }}</li>
      <li>{{ avengers[4] }}</li>
    </ul>
    <ul>
      <li
        *ngFor="
          let hero of avengers;
          index as idx;
          first as fst;
          last as lst;
          odd as od;
          even as ev
        "
      >
        {{ idx + 1 + ' ' + hero }}
        <ng-template [ngIf]="fst">This is the first hero</ng-template>
        <ng-template [ngIf]="!fst && !lst">This is in between</ng-template>
        <ng-template [ngIf]="idx == 1">This is the Second hero</ng-template>
        <ng-template [ngIf]="lst">This is the last hero</ng-template>
        <ng-template [ngIf]="od">This is the odd hero</ng-template>
        <ng-template [ngIf]="ev">This is the even hero</ng-template>
      </li>
    </ul>
    <ul>
      <!-- refer the documentation and create an example of @for -->
    </ul>
  `,
  standalone: false,
  styles: [
    `
      .box {
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      .redbox {
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: crimson;
      }
    `,
  ],
})
export class AppComponent {
  title = 'step2-directives';
  power: any = 5;
  avengers = [
    'ironman',
    'thor',
    'hulk',
    'scarlet witch',
    'black widow',
    'shauri',
    'dr strange',
  ];
  showTerms = true;
  increasePower(npower: any) {
    this.power = Number(npower);
  }
}
