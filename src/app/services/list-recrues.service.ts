import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  listRecrues: Personne[] = [];

  constructor() {}

  addRecrue(newRecrue) {
    if (this.listRecrues.indexOf(newRecrue) == -1)
      this.listRecrues.push(newRecrue);
    else alert('Cette personne a déjà été recrutée !');
  }
}
