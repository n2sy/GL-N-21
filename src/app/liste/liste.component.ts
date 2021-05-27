import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() tabPersonne: Personne[] = [];
  @Output() msgToCv = new EventEmitter<Personne>();
  constructor() {}

  ngOnInit(): void {}

  RecupPersonneFromItem(pers) {
    this.msgToCv.emit(pers);
  }
}
