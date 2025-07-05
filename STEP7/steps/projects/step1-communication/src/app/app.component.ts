import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>
    <h1 [innerHTML]="title"></h1>
    <h1 [innerHTML]="message"></h1>

    // event binding
    <br />
    <input #ti type="text" [value]="title" (change)="changeHandler(ti.value)" />
    <br />
    // value binding
    <br />
    <input #tn type="text" [value]="name" (input)="name = tn.value" />
    <h1>{{ name }}</h1>
    <br />
    // event value binding
    <h1>{{ veding }}</h1>
    <input #tn [value]="veding" (input)="veding = tn.value" />
    <br />
    // ngModel
    <input [(ngModel)]="veding" />
    <h1>{{ veding }}</h1>

    <input type="range" [(ngModel)]="power" />{{ power }}
    <app-child
      [heroVal]="title"
      [heroPow]="power"
      (childevent)="childEventListener($event)"
      >{{ title }}
      <h4>
        first para
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates
        sequi dolorum. Nisi mollitia commodi nihil accusantium enim vel beatae
        quam, architecto numquam dolores magnam. Labore quisquam laudantium
        officia corrupti!
      </h4>
      <h3>
        second para
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates
        sequi dolorum. Nisi mollitia commodi nihil accusantium enim vel beatae
        quam, architecto numquam dolores magnam. Labore quisquam laudantium
        officia corrupti!
      </h3>
      <p class="third">
        third para
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates
        sequi dolorum. Nisi mollitia commodi nihil accusantium enim vel beatae
        quam, architecto numquam dolores magnam. Labore quisquam laudantium
        officia corrupti!
        {{ title }}
      </p>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
        <li>List Item 6</li>
      </ul>
    </app-child>`,

  standalone: false,
  styles: [],
})
export class AppComponent {
  name = 'firstName';
  power = 0;
  message = 'default message';
  title = 'step1-communication';
  veding = 'value and event binding';
  changeHandler(ntextvalue: any) {
    this.title = ntextvalue;
  }
  childEventListener(any: any) {
    alert(any);
    this.message = any;
  }
}
