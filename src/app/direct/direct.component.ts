import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent implements OnInit {
  bgColor = 'pink';
  cl = 'red';
  constructor() {}

  ngOnInit(): void {}
}
