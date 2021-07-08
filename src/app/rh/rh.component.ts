import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css'],
})
export class RhComponent implements OnInit {
  tabCandidats = [];
  tabRecrues = [];
  tabRefuses = [];
  constructor(private persServ: ListPersonnesService) {}

  ngOnInit(): void {
    this.tabCandidats = this.persServ.getPersonsByStatus('candidat');
    this.tabRecrues = this.persServ.getPersonsByStatus('recrue');
    this.tabRefuses = this.persServ.getPersonsByStatus('refuse');
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  changeStatus(event, newStatus) {
    console.log(event);

    let droppedPerson = event.item.data;
    droppedPerson['statut'] = newStatus;
    this.persServ.updatePerson(droppedPerson);
    console.log(this.persServ.getListPersonnes());
  }
}
