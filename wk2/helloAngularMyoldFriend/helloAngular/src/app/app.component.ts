import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any = 'I love angular!';

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getData()
    .subscribe(data =>{
      this.title = data.message
    })
  }

}
