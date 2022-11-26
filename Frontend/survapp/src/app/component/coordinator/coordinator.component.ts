import { BackService } from './../../services/back.service';
import { survey } from './../../Interfaces/survey';
import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss'],
})
export class CoordinatorComponent implements OnInit {
  [x: string]: any;
  myData: any;
  active: any;
  deactive: any;
  id: any;
  pipe = new DatePipe('en-US');
  todayWithPipe: any;
  currentdate: any;
  updatime: any;

  changeMe: boolean = true;
  buttonDisabled: boolean = false;

  survey!: any[];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyService.getSurveyList().subscribe((data: any) => {
      this.survey = data;
    });
  }

  delete(id: any) {
    this.surveyService.deleteSurvey(id).subscribe((err) => {
      console.log(err);
    });
    this.surveyService.deleteQna(id).subscribe((err) => {
      console.log(err);
    });

    this.surveyService.getSurveyList().subscribe((data: any) => {
      this.survey = data;
    });
  }

  newStatus: any;

  updateStatus(status: any, id: any) {

    if (status == 'Active') {
      this.newStatus = 'Deactive';
    } else {
      this.newStatus = 'Active';
    }
    const data = {
      newStatus: this.newStatus,
    };

    this.surveyService.updateStatus(data, id).subscribe((err) => {
      console.log(err);
    });

    this.surveyService.getSurveyList().subscribe((data: any) => {
      this.survey = data;
    });

  }

}
