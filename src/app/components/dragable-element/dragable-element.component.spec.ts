import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragableElementComponent } from './dragable-element.component';

describe('DragableElementComponent', () => {
  let component: DragableElementComponent;
  let fixture: ComponentFixture<DragableElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragableElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
