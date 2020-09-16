import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveymanagerComponent } from './surveymanager.component';

describe('SurveymanagerComponent', () => {
  let component: SurveymanagerComponent;
  let fixture: ComponentFixture<SurveymanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveymanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
