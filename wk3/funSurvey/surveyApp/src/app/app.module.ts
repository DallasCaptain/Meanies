import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyResultComponent } from './survey-result/survey-result.component';
import { SurveymanagerComponent } from './surveymanager/surveymanager.component';
import { KittenManagerComponent } from './kitten-manager/kitten-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyResultComponent,
    SurveymanagerComponent,
    KittenManagerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
