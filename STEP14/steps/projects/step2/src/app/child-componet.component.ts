import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-componet',
  standalone: false,
  template: `
    <p>child-componet works!</p>
    {{ voter }}
    <br />
    <input
      type="button"
      value="Agree"
      (click)="voted(true)"
      [disabled]="isdisable"
    />
    <input
      type="button"
      value="Diagree"
      (click)="voted(false)"
      [disabled]="isdisable"
    />
  `,
  styles: ``,
})
export class ChildComponetComponent {
  @Input('voter') voter: string | undefined;

  isdisable = false;

  @Output() didvoting = new EventEmitter();
  voted(didVote: boolean) {
    this.isdisable = true;
    this.didvoting.emit(didVote);
  }
}
