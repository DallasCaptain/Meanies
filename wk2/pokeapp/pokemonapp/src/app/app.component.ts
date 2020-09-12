import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemonapp';
  pokemon:any=[]
  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
    this._httpService.getPokeList()
    .subscribe(data=>{
      console.log(data)
      this.pokemon = data.results
    })
  }
}
