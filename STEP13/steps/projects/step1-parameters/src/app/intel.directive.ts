import { Directive, ElementRef } from '@angular/core';
//  class selector .intel is class =".intel"
// tag directive <intel> is class ="intel"
@Directive({
  selector: 'intel',
  standalone: false,
})
export class IntelDirective {
  constructor(private er: ElementRef) {}
  ngOnInit() {
    // this.er.nativeElement.setAttribute('style', 'background-color:orange'); // class =".intel"
    this.er.nativeElement
      .querySelector('h1')
      .setAttribute('style', 'background-color:orange'); // class ="intel"
  }
}
