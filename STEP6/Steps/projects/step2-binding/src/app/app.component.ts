import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h1 innerHTML="{{ fistname }}"></h1>
    <h1 [innerHTML]="fistname"></h1>
    <h1 [innerText]="fistname"></h1>
    <h1 [textContent]="fistname"></h1>
    <h1 bind-innerHTML="title"></h1>
    <br />
    <input value="{{ title }}" type="text" />
    <br />
    <input [value]="title" type="text" /> //atribute bunding
    <br />
    <input bind-value="title" type="text" />
    <br />
    <input bind-value="power" type="range" />
    <br />
    tickMark
    <input [checked]="agree" type="checkbox" />
    <button [disabled]="agree">click</button>
    <h2 [class]="selecteStylered">hellow Red BOX</h2>
    <h2 [class]="selecteStylegreen">hellow Red BOX</h2>
    <input [value]="gatRandom()" type="range" />
  `,
  standalone: false,
  styles: [
    `
      .redbox {
        width: 200px;
        height: 200px;
        background-color: crimson;
        text-align: center;
        line-height: 200px;
        font-family: 'arial';
        padding: 20px;
      }
      .greenbox {
        width: 200px;
        height: 200px;
        background-color: green;
        text-align: center;
        line-height: 200px;
        font-family: 'arial';
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent {
  title: string = 'Welcome to step2-binding';
  power: number = 23;
  fistname = 'Hello world';
  agree: boolean = false;
  selecteStylered: string = 'redbox';
  selecteStylegreen: string = 'greenbox';
  gatRandom() {
    return Math.round(Math.random() * 100);
  }
}
