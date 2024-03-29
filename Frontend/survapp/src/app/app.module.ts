import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RespondHomeComponent } from './component/responded/respond-home/respond-home.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CoordinatorComponent } from './component/coordinator/coordinator.component';
import { CreateSurveyComponent } from './component/create-survey/create-survey.component';
import { TakeSurveyComponent } from './component/take-survey/take-survey.component';
import { SurveyResultsComponent } from './component/survey-results/survey-results.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComponent } from './component/email/email.component';





@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    CoordinatorComponent,
    RegisterComponent,
    FooterComponent,
    RespondHomeComponent,
    LandingpageComponent,
    NavbarComponent,
    CreateSurveyComponent,
    TakeSurveyComponent,
    SurveyResultsComponent,
    EmailComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
