import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  listePersonne: Personne[] = [
    new Personne('1', 'Nidhal', 'Jelassi', 35, 'Enseignant', 'nidhal.jpg'),
    new Personne('2', 'Bart', 'Simpson', 15, 'Chef de projet', 'bart.jpeg'),
    new Personne('3', 'Homer', 'Simpson', 66, 'Ingénieur', 'homer.jpg'),
  ];
  constructor() {}

  ngOnInit(): void {}

  RecupPersonneFromListe(pers) {
    this.selectedPersonne = pers;
  }
}
