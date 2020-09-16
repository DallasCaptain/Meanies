import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KittenManagerComponent } from './kitten-manager/kitten-manager.component';
import { SurveymanagerComponent } from './surveymanager/surveymanager.component';


const routes: Routes = [
  
  { path: 'kittens/:id', component: KittenManagerComponent, children:[
    {path: 'survey/:sid', component: SurveymanagerComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
