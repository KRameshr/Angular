import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComp } from './child.component';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
    <p>Welcome to {{ title }}!</p>
    <app-child #ac1></app-child>
    <app-child #ac2></app-child>
    <app-child #ac3></app-child>
    <app-child #ac4></app-child>
    <app-child #ac5></app-child>
    <button class="btn btn-primary  " (click)="appIncreasePower()">
      Increase Power
    </button>
    <button class="btn btn-primary mr-3" (click)="appDecreasePower()">
      Decrease Power
    </button>
    <input #ti type="text" />
    <button (click)="setChildTitle(ti.value)">Set New Title</button>
  </div>`,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'step2-communication';
  // @ViewChild(ChildComp) appChild:ChildComp = new ChildComp();
  // @ViewChild('ac') appChild?:ChildComp;
  @ViewChildren('ac1, ac2, ac3, ac4, ac5') appChild?: QueryList<ChildComp>;

  /*  
   appIncreasePower(){
     this.appChild?.increasePower();
  } 
  */
  appIncreasePower() {
    this.appChild?.forEach((val) => {
      val.increasePower();
    });
  }
  /*  
   appDecreasePower(){
    this.appChild?.decreasePower();
  } 
  */
  appDecreasePower() {
    this.appChild?.forEach((val) => {
      val.decreasePower();
    });
  }
  /* setChildTitle(message:string){
    this.appChild?.setTitle(message);
  } */
  setChildTitle(message: string) {
    this.appChild?.forEach((val) => {
      val.setTitle(message);
    });
  }
}
