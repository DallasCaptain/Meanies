import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ninjaGold';
  //gold:Array<{gold:number}>
  gold:number
  goldrequested:boolean
  event:Array<string>

  ngOnInit(){
    this.gold = 0
    this.event = []
    this.goldrequested = false
  }

  GoldRequested(min,max,loc){
    

    let justavariable = Math.floor(Math.random()*(max-min)+min)
   
    this.gold = this.gold + justavariable
    this.event.push('You have earned '+justavariable+' gold at the '+loc)
  }
  
  

}
