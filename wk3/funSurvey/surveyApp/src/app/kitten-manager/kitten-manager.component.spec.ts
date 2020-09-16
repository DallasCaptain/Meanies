import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenManagerComponent } from './kitten-manager.component';

describe('KittenManagerComponent', () => {
  let component: KittenManagerComponent;
  let fixture: ComponentFixture<KittenManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
