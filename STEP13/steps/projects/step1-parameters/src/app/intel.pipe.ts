import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intel',
  standalone: false,
})
export class IntelPipe implements PipeTransform {
  transform(label: any) {
    return label.toUpperCase();
  }
}
