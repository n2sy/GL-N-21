import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private persServ: ListPersonnesService, private router: Router) {}

  ngOnInit(): void {}

  addNewPerson(p) {
    console.log(p);
    this.persServ.addPersonAPI(p).subscribe(
      (response) => {
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        console.log('Problem with AddPerson');
      }
    );
  }
  resetForm(f) {
    f.reset();
  }
}
