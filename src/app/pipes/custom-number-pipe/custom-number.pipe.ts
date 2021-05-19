import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe implements PipeTransform {

  transform(value: number): number {
    return value ? Math.trunc(value) : 0;
  }

}
