import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  i;
  pers: Personne;
  constructor(
    private actRoute: ActivatedRoute,
    private persServ: ListPersonnesService
  ) {}

  ngOnInit(): void {
    /* SNAPSHOT */
    //this.i = this.actRoute.snapshot.paramMap.get('id');

    //this.actRoute.snapshot.params['id'];

    /* OBSERVABLE */
    this.actRoute.paramMap.subscribe((p: ParamMap) => {
      //this.i = p.get('id');
      this.pers = this.persServ.getPersonneById(p.get('id'));
    });

    // this.actRoute.params.subscribe((p: Params) => {
    //   console.log(p['id']);
    //   console.log(p.id);
    // });
  }
}
