import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  standalone: false,
  template: `
    <!-- parent c to child comp using is @Input  -->
    <!--child  c to parent  comp using is @Output  -->
    <p>parentcomp works! grant</p>
    <p>{{ message3 }}</p>
    <p>{{ message6 }}</p>
    <app-childcomp
      [parentDataFour]="message4"
      [parentDataFive]="message5"
      [parentData]="message1"
      parentDataTwo="{{ message2 }}"
      (childData)="checkmes($event)"
      (cmees)="cmd($event)"
    ></app-childcomp>
  `,
  styles: ``,
})
export class ParentcompComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  message3: string = '';
  message1: string = 'hey child welcome';
  message2: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nostrum rem accusamus atque architecto eligendi consequuntur corporis debitisadipisci reiciendis, assumenda ex ut ad at omnis labore est modi aut!';
  message4: string = 'form parent 4s';
  message5: string = 'form parent 5s ';
  OnInit() {}
  message6: string = '';
  checkmes(val: any) {
    this.message3 = val;
  }

  cmd(val: any) {
    this.message6 = val;
  }
}
