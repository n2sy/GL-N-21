import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListPersonnesService {
  private listePersonne: Personne[] = [
    new Personne('1', 'Nidhal', 'Jelassi', 35, 'Enseignant', 'nidhal.jpg'),
    new Personne('2', 'Bart', 'Simpson', 15, 'Chef de projet', 'bart.jpeg'),
    new Personne('3', 'Homer', 'Simpson', 66, 'Ingénieur', 'homer.jpg'),
  ];

  constructor() {}

  getListPersonnes() {
    return this.listePersonne;
  }

  addPerson() {
    this.listePersonne.push(
      new Personne('1', 'NEW', 'Person', 35, 'Enseignant', 'nidhal.jpg')
    );
  }
}
