import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor(private secondServ: SecondService) {}

  showAlert() {
    console.log('Je suis le First Service');
    this.secondServ.afficherInfos();
  }
}
