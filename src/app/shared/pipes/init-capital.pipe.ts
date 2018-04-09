import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initCapital',
})
export class InitCapitalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
      return m.toUpperCase();
    });
  }
}
