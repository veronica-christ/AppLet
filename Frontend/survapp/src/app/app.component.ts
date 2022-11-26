import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
const baseURL = environment.baseURL;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'survapp';



  

}


