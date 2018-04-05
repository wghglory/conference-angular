import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: true,
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], args: string): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return value.sort((x, y) => (x[args] > y[args] ? 1 : x[args] < y[args] ? -1 : 0));
  }
}
