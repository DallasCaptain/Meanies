import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-surveymanager',
  templateUrl: './surveymanager.component.html',
  styleUrls: ['./surveymanager.component.scss']
})
export class SurveymanagerComponent implements OnInit {
  surveyform ={name:'',opinion:''}
  showtable = false;
  surveyResults:Array<{name:string,opinion:string}>

  @Output() myoutput = new EventEmitter()

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.surveyResults=[]
    this._route.params.subscribe((params: Params)=>{
      console.log('survey params: ',params)
    })
  }

  onSubmit(){
    // this.randomObs = new Observable<Array<string>>()
    console.log('form submited',this.surveyform)
    this.surveyResults.push({name:this.surveyform.name,opinion:this.surveyform.opinion})
    console.log(this.surveyform,this.surveyResults)
    this.surveyform.name =''
    this.surveyform.opinion =''
  }

  showTable(){
    this.showtable=true
    console.log(this.surveyResults)
  }

  triggerEvent(){
    this.myoutput.emit('this is what i emitted')
    //maybe i need to update my list of x because this is my
    //child saying they updated the database so i should look
  }

}
