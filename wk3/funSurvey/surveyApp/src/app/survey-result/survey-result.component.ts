import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit {
  @Input() survey:{name:string,opinion:string}
  constructor() { }

  ngOnInit() {

  }

}
