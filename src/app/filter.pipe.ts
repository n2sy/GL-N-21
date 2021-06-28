import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: unknown[], selStatus: string): unknown {
    if (!selStatus.length) return value;
    else {
      let newTabServers = [];
      for (const serv of value) {
        if (serv['status'] == selStatus) newTabServers.push(serv);
      }
      return newTabServers;
    }
  }
}
