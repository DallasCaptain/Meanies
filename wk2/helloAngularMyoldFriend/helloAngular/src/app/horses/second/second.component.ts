import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getData().subscribe(data=>{
      console.log('Second says',data)
    })
  }

}
