import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  transform(value: string, seuil: number): string {
    if (value.length > seuil) return value.substring(0, seuil) + '...';
    else return value;
  }
}
