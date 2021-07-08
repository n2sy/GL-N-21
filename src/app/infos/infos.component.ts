import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  pers;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private persServ: ListPersonnesService
  ) {}

  ngOnInit(): void {
    /* SNAPSHOT */
    //this.i = this.actRoute.snapshot.paramMap.get('id');

    //this.actRoute.snapshot.params['id'];

    /* OBSERVABLE */
    this.actRoute.paramMap.subscribe(
      (p: ParamMap) => {
        //this.i = p.get('id');
        this.persServ.getPersonneByIdAPI(p.get('id')).subscribe(
          (response) => {
            this.pers = response;
          },
          (error) => {
            console.log('Problem with getPersonById');
          }
        );
      },
      (error) => {
        console.log('Error with paramMap');
      }
    );

    // this.actRoute.params.subscribe((p: Params) => {
    //   console.log(p['id']);
    //   console.log(p.id);
    // });
  }

  deletePerson() {
    if (confirm('Etes-vous sûr de vouloir supprimer cette personne ?')) {
      this.persServ.deletePersonAPI(this.pers._id).subscribe(
        (response) => {
          console.log(response);

          this.router.navigateByUrl('/cv');
        },
        (error) => {
          console.log('Problem with deletePerson');
        }
      );
    }
  }

  updatePerson() {
    this.router.navigate(['cv', 'edit', this.pers._id]);
  }
}
