import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-dragable-element',
  templateUrl: './dragable-element.component.html',
  styleUrls: ['./dragable-element.component.scss']
})
export class DragableElementComponent implements OnInit {

  id : number = 1111;
  desc : string = "בדיקה";

  constructor() { }

  ngOnInit() {
  }

}
