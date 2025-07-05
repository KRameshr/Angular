import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  template: ` <h2>{{ title }}</h2>
    <h3>message :{{ message }}</h3>`,
  styles: ``,
})
//  Life Cycle Methord
export class ChildComponent implements OnInit, OnChanges {
  title = 'Child Component';
  @Input() message: String = 'default message';
  constructor() {
    console.log('The Constructor');
  }
  ngOnInit() {
    console.log('The Constructor OnInit ');
  }
  ngOnChanges(chageObj: any) {
    console.log('The Constructor OnInit ', chageObj);
    if (chageObj.message.currentValue === '66666') {
      this.message = 'Cant be 6 time 6';
    }
  }
}
