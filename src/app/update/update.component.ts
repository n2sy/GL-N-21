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
    this.actRoute.paramMap.subscribe(
      (par) => {
        this.pers = this.persServ.getPersonneByIdAPI(par.get('id')).subscribe(
          (response) => {
            this.pers = response;
          },
          (error) => {
            console.log('Problem with getPersonById');
          }
        );
      },
      (error) => {
        console.log('Problem with paramMap');
      }
    );
  }

  updatePerson() {
    this.persServ.updatePersonAPI(this.pers).subscribe(
      (response) => {
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        console.log('Problem with updatePerson');
      }
    );
  }
}
