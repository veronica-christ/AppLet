import { Router } from '@angular/router';
import { BackService } from './../../../services/back.service';
import { Component, OnInit } from '@angular/core';
import { RespondedService } from 'src/app/services/responded.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-respond-home',
  templateUrl: './respond-home.component.html',
  styleUrls: ['./respond-home.component.scss'],
})
export class RespondHomeComponent implements OnInit {
  mydata: any;
  submitted = false;
  title = '';
  survey: any;

  constructor(
    private surveySurvice: SurveyService,
    private backService: BackService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.surveySurvice.getSurveyList().subscribe((data: any) => {
      this.survey = data;

    });
  }

  takeSurvey(id: any, title: any) {
    this.surveySurvice.takingSurvey(id, title);
    //console.log('id to take ' + id);
    this.router.navigateByUrl('/take-survey');
  }

  results(id: any, title: any) {
    this.surveySurvice.takingSurvey(id, title);
    //console.log('id to take ' + id);
    this.router.navigateByUrl('/results');
  }
  getstatus() {
    return this.surveySurvice.getSurveyList().subscribe({
      next: (data) => {
        this.mydata = data;
       // console.log(data);
      },
    });
  }
}
