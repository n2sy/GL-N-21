import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  listFonts = ['', 'Phosphate', 'Arial', 'Garamond'];
  bgColor;
  textColor;
  size;
  fontFamily;
  constructor() {}

  ngOnInit(): void {}

  changeSize(inp) {
    //console.log(inp.value);

    this.size = inp.value + 'px';
  }
}
