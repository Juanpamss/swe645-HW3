import { Component, OnInit } from '@angular/core';
import {StudentSurveyService} from "../services/student-survey.service";
import {StudentSurvey} from "../models/StudentSurvey.model";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private _studentSurvey: StudentSurveyService) { }

  studentSurvey: StudentSurvey = new StudentSurvey()

  ngOnInit(): void {
  }

  submitForm(surveyData){

    let checkboxValues = []
    let checkboxes = document.getElementsByName('preferences');
    // @ts-ignore
    for (let checkbox of checkboxes) {
      if (checkbox.checked){
        checkboxValues.push(checkbox.value);
      }
    }




    this.studentSurvey.name = surveyData.value.name;
    this.studentSurvey.lastName = surveyData.value.last_name;
    this.studentSurvey.address = surveyData.value.address;
    this.studentSurvey.city = surveyData.value.city;
    this.studentSurvey.state = surveyData.value.state;
    this.studentSurvey.zip = surveyData.value.zip;
    this.studentSurvey.telephone = surveyData.value.telephone;
    this.studentSurvey.email = surveyData.value.email;
    this.studentSurvey.date = surveyData.value.date;
    this.studentSurvey.preferences = checkboxValues.join(",");
    this.studentSurvey.interested = surveyData.value.interested;
    this.studentSurvey.recommend = surveyData.value.recommend;

    this._studentSurvey.postStudentSurvey(this.studentSurvey).subscribe(
      data => {
        console.log("Success!")
      }
    )
  }

}
