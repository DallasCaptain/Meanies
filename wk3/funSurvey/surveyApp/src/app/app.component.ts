import { Component } from '@angular/core';
//import { Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surveyApp';
  
  //randomObs:Observable<Array<string>>
  // ['bob','carl']
  ngOnInit(){
    


  }

  datafromchild(event){
    console.log('event from datafromchild', event)
  }
  
}
