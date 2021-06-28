import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent implements OnInit {
  tabRecrues: Personne[] = [];

  constructor(private recServ: ListRecruesService) {}

  ngOnInit(): void {
    this.tabRecrues = this.recServ.listRecrues;
  }
}
