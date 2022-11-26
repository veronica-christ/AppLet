import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  currentSuvey!: any;
  title!: any;

  constructor(private http: HttpClient) {}

  takingSurvey(id: any, title: any) {
    this.currentSuvey = id;
    this.title = title;
  }

  public addSurvey(surveyData: any) {
    return this.http.post(baseURL + '/addSurvey', surveyData);
  }
  public addQna(surveyData: any) {
    return this.http.post(baseURL + '/addQna', surveyData);
  }

  getSurveyList() {
    return this.http.get(`${baseURL}/surveylist`);
  }
  getQuestion(survey_id: any) {
    return this.http.get(`${baseURL}/takeSurvey/` + survey_id);
  }

  updateStatus(status: any, id: any) {
    return this.http.put(`${baseURL}/updateStatus/` + id, status);
  }

  deleteSurvey(survey_id: any) {
    return this.http.delete(baseURL + '/deleteSurvey/' + survey_id);
  }
  deleteQna(survey_id: any) {
    return this.http.delete(`${baseURL}/deleteQna/` + survey_id);
  }
  getdetails(survey_id: any) {
    return this.http.get(`${baseURL}/getdetails/` + survey_id);
  }

  public addResult(surveyData: any) {
    return this.http.post(baseURL + '/addResults', surveyData);
    
  }

  getResults(user_id: any) {
    return this.http.get(`${baseURL}/getResults/` + user_id);
  }
}
