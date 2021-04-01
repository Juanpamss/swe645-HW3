import { Component, OnInit } from '@angular/core';
import {StudentSurvey} from "../models/StudentSurvey.model";
import {StudentSurveyService} from "../services/student-survey.service";

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.css']
})
export class SurveyTableComponent implements OnInit {

  constructor(private _studentSurvey: StudentSurveyService) { }

  studentSurveyList: StudentSurvey[]

  ngOnInit(): void {

    this._studentSurvey.getStudentSurveyList().subscribe(
      data => {

        this.studentSurveyList = data

        console.log("Data: ", this.studentSurveyList)
      }
    )

  }

  parseDateToCustomFormat(date){
    return new Date(date)
  }

}
