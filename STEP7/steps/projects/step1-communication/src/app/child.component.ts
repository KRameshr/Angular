import {
  Component,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  //   inputs: ['inputValue', 'powervalue'],
  template: `<h2>Child Component</h2>

    <div class="box">
      <h3>Input Value:{{ inputValue }}</h3>
      <h3>Input Value:{{ powervalue * 2 }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit amet
        excepturi dignissimos cumque neque perspiciatis modi pariatur, nostrum
        deserunt, mollitia quaerat natus iure minus culpa voluptate consequatur
        repellendus? Quod, repellendus.
      </p>
      <ng-content select="h1"></ng-content>
      <ng-content select="p"></ng-content>
      <ng-content select="ul"></ng-content>
      <ng-content select="p.third"></ng-content>
      <input #ti type="text" />
      <button (click)="clikHandler(ti.value)">Make Child Event Happen</button>
    </div>`,
  standalone: false,
  styles: [
    `
      .box {
        border: 1px solid grey;
        background-color: silver;
        padding: 10px;
        justify-content: space-around;
      }
    `,
  ],
})
export class ChildComp {
  @Input('heroVal') inputValue: string = 'default value';
  @Input('heroPow') powervalue: number = 0;
  // to send values to parent
  @Output('childevent') chilCompEvent: EventEmitter<any> = new EventEmitter();
  clikHandler(val: any) {
    // alert('alert in child component');
    this.chilCompEvent.emit(val);
  }
}
