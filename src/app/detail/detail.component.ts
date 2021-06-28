import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() persSelected: Personne;
  constructor(private listRecrue: ListRecruesService, private router: Router) {}

  ngOnInit(): void {}

  addNewRecrue() {
    this.listRecrue.addRecrue(this.persSelected);
  }

  goToInfos() {
    this.router.navigate(['cv', this.persSelected._id]);
  }
}
