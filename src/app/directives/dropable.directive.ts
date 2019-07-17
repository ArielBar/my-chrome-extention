import { Directive, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[abDropable]',
  host:{
    '(drop)' : 'onDrop($event)',
    '(dragover)' : 'onDragover($event)',
    '(dragenter)' : 'onDragenter($event)',
    '(dragleave)' : 'onDragleave($event)',
    '[id]': 'id'
  }
})
export class DropableDirective implements OnInit{

  @Output() dropHandled: EventEmitter<any> = new EventEmitter();

  id:string;
  savedBorder : string = ''

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.id = this.newGuid();
    this.savedBorder = this.element.nativeElement.style.border;
  }

  onDragover(ev) {
    ev.preventDefault();
  }

  onDrop(ev) {
    ev.preventDefault();
    this.dropHandled.emit(ev);
    this.element.nativeElement.style.border = this.savedBorder;
  }

  
  onDragenter(event){
    this.element.nativeElement.style.border = '1px dashed';
  }

  onDragleave(event){
    this.element.nativeElement.style.border = this.savedBorder;
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
