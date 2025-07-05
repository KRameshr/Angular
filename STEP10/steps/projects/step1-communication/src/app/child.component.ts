import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  template: `
    <h2>Child Component</h2>
    <h3>Title {{ title }}</h3>
    <h3>Power {{ power }}</h3>
  `,
})
export class ChildComp {
  power = 0;
  title = '';
  increasePower() {
    this.power = this.power + 1;
  }
  decreasePower() {
    this.power = this.power - 1;
  }
  setTitle(ntitle: string) {
    this.title = ntitle;
  }
}
