import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  nom: string = 'Raouaa';
  @Input() color: string = 'pink';
  hd: boolean = false;

  @Output() sendMsg = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  changeHd() {
    this.hd = !this.hd;
  }

  EnvoyerMsg() {
    this.sendMsg.emit("Message envoyé par l'enfant!");
  }
}
