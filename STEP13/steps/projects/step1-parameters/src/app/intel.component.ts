import { Component } from '@angular/core';

@Component({
  selector: 'app-intel',
  standalone: false,
  template: `
    <div style="border:1px solid grey;float:left; margin:8px  ; ">
      <div
        style="padding: 20px; display: flex; flex-direction: column; gap:20px"
      >
        <p>{{ title }}intel works!</p>
        <input #colip (input)="selectedColor = colip.value" type="color" />
        <input
          #mesagecolip
          (input)="compmessage = mesagecolip.value"
          type="text"
        />
        <div class="box" [style.background-color]="selectedColor">
          <div class="box-text">
            {{ compmessage }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .box {
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-family: sans-serif;
      }
      .box-text {
        color: '';
      }
    `,
  ],
})
export class IntelComponent {
  title = 'Intel Componets';
  compmessage = '';
  selectedColor = '';
}
