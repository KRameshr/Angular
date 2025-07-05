import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gen',
  standalone: false,
})
export class GenPipe implements PipeTransform {
  transform(label: any, gender: any) {
    // return 'hello from Gen Pipe';
    if (gender == 'female') {
      return 'Miss ' + label;
    } else {
      return 'Mr ' + label;
    }
  }
}
