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
    new Personne('4', 'Marge', 'Simpson', 66, 'PDG'),
  ];

  constructor() {}

  getListPersonnes() {
    return this.listePersonne;
  }

  getPersonneById(id) {
    return this.listePersonne.find((p) => p._id == id);
  }

  // addPerson() {
  //   this.listePersonne.push(
  //     new Personne('1', 'NEW', 'Person', 35, 'Enseignant', 'nidhal.jpg')
  //   );
  // }
}
