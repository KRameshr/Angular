import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  standalone: false,
  template: `
    <p>childcomp works!</p>
    <p>{{ parentData }}</p>
    <!-- <p>{{ parentDataTwo }}</p> -->
    <hr />
    <p>{{ parentDataThree }}</p>
    <p>{{ parentDataFour }}</p>
    <p>{{ parentDataFive }}</p>
    <input type="button" (click)="sendMsg()" value="Clik" />

    <br />
    <input type="button" (click)="sendMsging()" value="clikME" />
  `,
  styles: ``,
})
export class ChildcompComponent implements OnInit {
  @Input() parentData: string | undefined;
  // @Input() parentDataTwo: string | undefined;
  @Input('parentDataTwo') parentDataThree: string | undefined;
  @Input() parentDataFour: string | undefined;
  @Output() childData = new EventEmitter();
  @Input() parentDataFive: string | undefined;
  sendMsg() {
    this.childData.emit('hey mr child to parent');
  }
  @Output() cmees = new EventEmitter();
  sendMsging() {
    this.cmees.emit('hey MR Child to parenting the comping');
  }

  constructor() {}
  ngOnInit(): void {}
}
