import { Component, OnInit } from '@angular/core';
import { LiveMockService } from './live-mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-chrome-extention';

  fighters : Array<object>;
  currentThing : string;

  constructor(private liveMockService : LiveMockService){
    
  }

  ngOnInit(): void {
    this.liveMockService.get().subscribe((result)=>{
      this.fighters = result;
    });
  }

  add(){
    if(this.currentThing && this.currentThing != ""){
      this.fighters.push({ name: this.currentThing, wins: 21, losses: 3 });
      this.currentThing = "";

      this.updateStore();
    }
  }

  remove(index : number){
    this.fighters.splice(index,1);
    this.updateStore();
  }

  updateStore(): any {
    window.localStorage.setItem("fighters", JSON.stringify(this.fighters));  
  }
}
