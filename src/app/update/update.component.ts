import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  pers;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private persServ: ListPersonnesService
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((par) => {
      this.pers = this.persServ.getPersonneById(par.get('id'));
    });
  }

  updatePerson() {
    this.persServ.updatePerson(this.pers);
    this.router.navigateByUrl('/cv');
  }
}
