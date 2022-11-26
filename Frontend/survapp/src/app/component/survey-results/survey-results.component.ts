import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';


@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss'],
})
export class SurveyResultsComponent implements OnInit {
  result: number[] =[]
 showResults:any
  data = 14
  survey:any;


constructor(private surveyServive: SurveyService) {}


ngOnInit(): void { 
  console.log( this.data)
    this.surveyServive.getResults(this.data).subscribe(
      (data:any)=>{
        this.showResults = data
       

          this.logger()
          return data 
      }
    )

    this.surveyServive
    .getQuestion(this.surveyServive.currentSuvey)
    .subscribe((data: any) => {
      this.survey = data;
      console.log(data);
    });
  }
  logger(){
    console.log("in logger")

    console.log("these" + this.showResults[0].title)
    this.showResults.forEach((element:any) => {
      let i = 0
      console.log(element)


    });
   
  }



}
