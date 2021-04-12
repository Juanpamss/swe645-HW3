import { Component, OnInit } from '@angular/core';
import {StudentSurveyService} from "../services/student-survey.service";
import {StudentSurvey} from "../models/StudentSurvey.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(
    private _studentSurvey: StudentSurveyService,
    private _router: Router
  ) { }

  studentSurvey: StudentSurvey = new StudentSurvey()

  ngOnInit(): void {
  }

  //Submit the form once all the necessary data has been filled out
  submitForm(surveyData){

    let checkboxValues = []
    let checkboxes = document.getElementsByName('preferences');
    // @ts-ignore
    for (let checkbox of checkboxes) {
      if (checkbox.checked){
        checkboxValues.push(checkbox.value);
      }
    }

    //Parse and assign each input from the survey
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

    this.submitMessage()
  }

  submitMessage() {
    alert("Survey submitted. Thank you!");
    window.location.reload()
  }
}
