import { Component, OnInit } from '@angular/core';
import { SurveyCreator } from 'survey-creator-knockout';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

import { OtherEmptyError } from 'survey-angular';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

import { QuestionServService } from 'src/app/services/question-serv.service';
import { BackService } from 'src/app/services/back.service';
import {SnackbarService} from '../../services/snackbar.service'
import { MatSnackBarConfig } from '@angular/material/snack-bar/public-api';




@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent implements OnInit {

  Form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    Code: new FormControl(''),
    status: new FormControl(''),
    question: new FormControl(''),
    option1: new FormControl(''),
    option2: new FormControl(''),
    option3: new FormControl(''),
  });


  counter: number = 1;



  isDisable: boolean = false;
  isSuccessful = false;
  submitted = false;
  isFormEmpty = false;

  constructor(
    private formBuilder: FormBuilder,
    private SurveyService: SurveyService,
    private router: Router,
    private snackBService:SnackbarService,

  ) {}


  ngOnInit(): void {
    console.log(this.counter);




    this.Form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      survey_id: ['', Validators.required],
      status: ['', Validators.required],
      question: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
    });


  }




  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }


  onSubmit() {

    if ( this.submitted != true )
    {
      Swal.fire(
        'Survey is empty',
        'Please fill in the required info to create the survey'
      );

      return false
    }
    else
    {
       Swal.fire({
      title: 'Do you want to submit the survey?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      confirmButtonColor: '#011345',
      cancelButtonText: `Cancel`,
      cancelButtonColor: 'red',
    }).then((result) => {
      if (result.isConfirmed) {
        



        let survey = {
          title: this.Form.value.title,
          description: this.Form.value.description,
          survey_id: this.Form.value.survey_id,
          status: this.Form.value.status
        }
     this.SurveyService.addSurvey(survey).subscribe((data:any)=>{
         Swal.fire('Submitted', '', 'success');
    
  this.router.navigateByUrl('/coordinator');

     },(err) => {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ' the survey code already exists!'
      })
      this.router.navigateByUrl('/coordinator');
    });


      } else if (result.dismiss == Swal.DismissReason.cancel) {
        Swal.fire('Survey cancelled', '', 'error');
      }
    });

    return true;
    }



  }

  save() {
    this.submitted = true;




    if (this.Form.value.title === "" || this.Form.value.title == null ||
      this.Form.value.description === "" || this.Form.value.description == null ||
      this.Form.value.question === "" || this.Form.value.question == null ||
      this.Form.value.option1 === "" || this.Form.value.option1 == null ||
      this.Form.value.option2 === "" || this.Form.value.option2 == null ||
      this.Form.value.option3 === "" || this.Form.value.option3 == null) {
      Swal.fire(
        'Please fill in all the required information',
        'All info is required to create the survey'
      );

      return false

     }
    else {
      this.isDisable = true;

      let qna = {
        survey_id: this.Form.value.survey_id,
        question: this.Form.value.question,
        option1: this.Form.value.option1,
        option2: this.Form.value.option2,
        option3: this.Form.value.option3,
      };


      this.SurveyService.addQna(qna).subscribe();
      this.counter++;
      Swal.fire(
        'Question successfully added',
        'Question and answers added. You may proceed to add another question'
      );

    }


    this.Form.controls['option1'].reset();
    this.Form.controls['option2'].reset();
    this.Form.controls['option3'].reset();
    this.Form.controls['question'].reset();

    return true;

  };

  cancel(){
    this.delete(this.Form.value.survey_id)
  }
 delete(id :any){
  this.SurveyService.deleteSurvey(id).subscribe((err) => {
    console.log(err);
  });
  this.SurveyService.deleteQna(id).subscribe((err) => {
    console.log(err);
  });

 }
}

