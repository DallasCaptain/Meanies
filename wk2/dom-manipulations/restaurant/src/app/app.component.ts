import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dallas Dojo Buffet';
  buttonName:string;
  tableRequested: boolean;
  tableStatus:string;

  tables:Array<{name:string,status:string,id:number}>;

  constructor(){

  }

  ngOnInit(){
    this.tables = [{name:'Head',status:'pending',id:0},{name:'Bar',status:'pending',id:1}]
    this.tableStatus = 'pending'
    this.buttonName = 'request table'
    this.tableRequested=false
  }


  onTableRequested(e){
    if(this.tableRequested){
      this.tableStatus='pending'
      this.tableRequested = false
      this.buttonName = 'request table'
    }else{
      this.tableStatus = 'requested'
      this.tableRequested = true
      this.buttonName = 'cancel table'
    }
    console.log(e)
    //e.target.innerHTML = 'i changed it'
    
  }

  requestTable(id){
    if(this.tables[id].status=='pending'){
      this.tables[id].status = 'requested'
    }else{
      this.tables[id].status='pending'
    }
    //this.tableStatus = 'requested'
    //this.tableRequested = true
  }
  cancelTable(){
    this.tableStatus='pending'
    this.tableRequested = false
  }
}
