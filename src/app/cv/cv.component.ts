import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { FirstService } from '../services/first.service';
import { SecondService } from '../services/second.service';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  listePersonne: Personne[] = [
    // new Personne('1', 'Nidhal', 'Jelassi', 35, 'Enseignant', 'nidhal.jpg'),
    // new Personne('2', 'Bart', 'Simpson', 15, 'Chef de projet', 'bart.jpeg'),
    // new Personne('3', 'Homer', 'Simpson', 66, 'Ingénieur', 'homer.jpg'),
  ];
  //constructor(private fServ: FirstService, private secondServ: SecondService) {}
  constructor(private listPers: ListPersonnesService) {}

  ngOnInit(): void {
    this.listePersonne = this.listPers.getListPersonnes();
    // this.fServ.showAlert();
    // this.secondServ.afficherInfos();
  }

  addNewPerson() {
    this.listPers.addPerson();
  }

  listFromCV() {
    console.log(this.listPers.getListPersonnes());
  }

  RecupPersonneFromListe(pers) {
    this.selectedPersonne = pers;
  }
}
