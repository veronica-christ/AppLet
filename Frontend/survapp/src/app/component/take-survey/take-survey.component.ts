import { BackService } from './../../services/back.service';
import { Component, OnInit } from '@angular/core';

import { SurveyService } from 'src/app/services/survey.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

//enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.scss'],
})
export class TakeSurveyComponent implements OnInit {
  isSubmitted = false;
  survey: any;
  details: any;

  constructor(
    private formBuilder: FormBuilder,
    private surveySurvice: SurveyService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.surveySurvice
      .getQuestion(this.surveySurvice.currentSuvey)
      .subscribe((data: any) => {
        this.survey = data;
        console.log(data);
      });
    this.surveySurvice
      .getdetails(this.surveySurvice.currentSuvey)
      .subscribe((data: any) => {
        this.details = data;
        console.log(data);
      });

    console.log('this current ' + this.surveySurvice.currentSuvey);
  }

  get myForm() {
    return this.registrationForm.get('gender');
  }

  // isAllSelected(item: { id: number; }) {
  //   this.checklist.forEach(val => {
  //     if (val.id == item.id) val.isSelected = !val.isSelected;
  //     else {
  //       val.isSelected = false;
  //     }
  //   });
  // }

  registrationForm = new FormGroup({
    1: new FormControl(''),
  });

  add(key: any, val: any) {
    switch (key) {
      case 'q1.1':
      case 'q1.2':
      case 'q1.3':
        this.result[0] = val;
        break;
      case 'q2.1':
      case 'q2.2':
      case 'q2.3':
        this.result[1] = val;
        break;
      case 'q3.1':
      case 'q3.2':
      case 'q3.3':
        this.result[2] = val;
        break;
      case 'q4.1':
      case 'q4.2':
      case 'q4.3':
        this.result[3] = val;
        break;
      case 'q5.1':
      case 'q5.2':
      case 'q5.3':
        this.result[4] = val;
        break;
      case 'q6.1':
      case 'q6.2':
      case 'q6.3':
        this.result[5] = val;
        break;
      case 'q7.1':
      case 'q7.2':
      case 'q7.3':
        this.result[6] = val;
        break;
      case 'q8.1':
      case 'q8.2':
      case 'q8.3':
        this.result[7] = val;
        break;
      case 'q9.1':
      case 'q9.2':
      case 'q9.3':
        this.result[8] = val;
        break;
      case 'q10.1':
      case 'q10.2':
      case 'q10.3':
        this.result[9] = val;
        break;
      default:
        break;
    }
  }

  result: number[] = [];

  select(e: any) {
   // console.log(e.target.value);
    this.result.push(e.target.value);
   this.add(e.target.id,e.target.value)
   console.log(e.target.id);
    console.log(this.result);
  }
  user_id=localStorage.getItem('user_id')

  onSubmit() {
    let data = {
      survey_id: this.surveySurvice.currentSuvey,
      user_id: this.user_id,
      title: this.surveySurvice.title,
      results: this.result,
    };
    console.log(data);
    this.surveySurvice.addResult(data).subscribe((err) => {
      console.log(err); 
        this.router.navigateByUrl('/responded');
    },(err) => { 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have already taken this survey!'
      })
      this.router.navigateByUrl('/responded');
    });;
 
  }
}
