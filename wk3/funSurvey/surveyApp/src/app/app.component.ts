import { Component } from '@angular/core';
//import { Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surveyApp';
  surveyform ={name:'',opinion:''}
  showtable = false;
  surveyResults:Array<{name:string,opinion:string}>
  //randomObs:Observable<Array<string>>
  // ['bob','carl']
  ngOnInit(){
    this.surveyResults=[]


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
}
