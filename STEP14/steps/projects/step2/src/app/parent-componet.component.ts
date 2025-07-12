import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-componet',
  standalone: false,
  template: `
    <p>agreed : {{ agreed }}</p>
    <p>diagreed : {{ disagreed }}</p>
    <app-child-componet
      *ngFor="let voter of persons"
      [voter]="voter"
      (didvoting)="onvoted($event)"
    ></app-child-componet>
    <br /><br />
    <input type="text" />
    <select (change)="getMeseletedValue($event)">
      <option *ngFor="let color of colour; index as i; first as isFirst">
        {{ i + 1 }} {{ color }} {{ isFirst }}
      </option>
    </select>
    <div [ngSwitch]="selectedColor">
      <div [ngSwitchCase]="'red'">You picked red and you are loveable</div>
      <div [ngSwitchCase]="'green'">You picked red and you are loveable</div>
      <div [ngSwitchCase]="'blue'">You picked red and you are loveable</div>
    </div>
  `,
  styles: ``,
})
export class ParentComponetComponent {
  agreed: number = 0;
  disagreed: number = 0;
  persons = ['Mr Harry', 'Mr Jhhone', 'Mr kevun'];

  onvoted(didvoting: boolean) {
    didvoting ? this.agreed++ : this.disagreed++;
  }
  colour = ['red', 'blue', 'orange'];
  selectedColor!: string;
  getMeseletedValue(event: any) {
    this.selectedColor = event.target.value;
  }
}
