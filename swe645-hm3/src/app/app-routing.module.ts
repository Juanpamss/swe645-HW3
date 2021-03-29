import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {SurveyListComponent} from "./survey-list/survey-list.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'surveyList', component: SurveyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
