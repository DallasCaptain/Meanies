import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-kitten-manager',
  templateUrl: './kitten-manager.component.html',
  styleUrls: ['./kitten-manager.component.scss']
})
export class KittenManagerComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log('kitten params: ',params)
    })
    //setTimeout(()=>{this._router.navigate(['/'])},10000)
  }

}
