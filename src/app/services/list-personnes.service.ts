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

  addPerson(p) {
    p._id = this.listePersonne[this.listePersonne.length - 1]._id + 1;
    this.listePersonne.push(p);
  }

  // addPerson() {
  //   this.listePersonne.push(
  //     new Personne('1', 'NEW', 'Person', 35, 'Enseignant', 'nidhal.jpg')
  //   );
  // }

  deletePerson(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne.splice(i, 1);
  }

  updatePerson(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }
}
