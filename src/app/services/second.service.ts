import { Injectable, Injector } from '@angular/core';
import { FirstService } from './first.service';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor(/*private inj: Injector*/) {}

  afficherInfos() {
    console.log('Je suis le second Service');
    //const alert = this.inj.get(FirstService);
    //alert.showAlert();
  }
}
