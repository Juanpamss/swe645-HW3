import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {StudentSurvey} from "../models/StudentSurvey.model";

@Injectable({
  providedIn: 'root'
})
export class StudentSurveyService {

  constructor(private httpClient: HttpClient) { }

  getStudentSurveyList(): Observable<any>{

    return this.httpClient.get("http://18.234.80.212/swe645-HW3-WebService/StudentSurveyServlet")
  }

  postStudentSurvey(surveyData: StudentSurvey): Observable<any> {

    let httpParams = new HttpParams()
      .set('name', surveyData.name)
      .set('last_name', surveyData.lastName)
      .set('address', surveyData.address)
      .set('city', surveyData.city)
      .set('state', surveyData.state)
      .set('zip', surveyData.zip.toString())
      .set('telephone', surveyData.telephone)
      .set('email', surveyData.email)
      .set('date', surveyData.date)
      .set('preferences', surveyData.preferences)
      .set('interested', surveyData.interested)
      .set('recommend', surveyData.recommend)

    const body = JSON.stringify(surveyData);

    return this.httpClient.post("http://18.234.80.212/swe645-HW3-WebService/StudentSurveyServlet",body, {
      params: httpParams
    })
  }
}
