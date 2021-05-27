import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() onePersonne: Personne;
  @Output() msgToListe = new EventEmitter<Personne>();
  constructor() {}

  ngOnInit(): void {}

  sendPersToListe() {
    this.msgToListe.emit(this.onePersonne);
  }
}
