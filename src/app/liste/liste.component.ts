import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  tabPersonne: Personne[] = [];
  @Output() msgToCv = new EventEmitter<Personne>();
  constructor(private listPers: ListPersonnesService) {}

  ngOnInit(): void {
    this.tabPersonne = this.listPers.getListPersonnes();
  }

  RecupPersonneFromItem(pers) {
    this.msgToCv.emit(pers);
  }

  listFromList() {
    console.log(this.listPers.getListPersonnes());
  }
}
