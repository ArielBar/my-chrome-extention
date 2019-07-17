import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[abDragable]',
  host: {
    '(dragstart)': 'onDragstart($event)',
    '[draggable]': 'true',
    '[id]': 'id'
  }
})
export class DragableDirective implements OnInit {

  id: string;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.id = this.newGuid();
  }

  onDragstart(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
