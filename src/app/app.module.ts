import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DragableDirective } from './directives/dragable.directive';
import { DropableDirective } from './directives/dropable.directive';
import { DragableElementComponent } from './components/dragable-element/dragable-element.component';

@NgModule({
  declarations: [
    AppComponent,
    DragableDirective,
    DropableDirective,
    DragableElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
