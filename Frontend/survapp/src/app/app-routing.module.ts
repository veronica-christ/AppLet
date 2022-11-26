import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { CoordinatorComponent } from './component/coordinator/coordinator.component';
import { RespondHomeComponent } from './component/responded/respond-home/respond-home.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { CreateSurveyComponent } from './component/create-survey/create-survey.component';

import { TakeSurveyComponent } from './component/take-survey/take-survey.component';
import { SurveyResultsComponent } from './component/survey-results/survey-results.component';
import { EmailComponent } from './component/email/email.component';
import { AuthGuard } from './services/auth.guard';





const routes: Routes = [
   {path:'', component: LandingpageComponent},
   {path:'signin', component: LoginComponent},
   {path:'signup', component: RegisterComponent},
   {path: 'create', component:CreateSurveyComponent,canActivate:[AuthGuard]},
   {path: 'coordinator', component: CoordinatorComponent,canActivate:[AuthGuard]},
   {path: 'take-survey', component: TakeSurveyComponent, canActivate:[AuthGuard]},
   {path: 'survey-results', component: SurveyResultsComponent},
   {path: 'email', component: EmailComponent, canActivate:[AuthGuard]},
   {path:'results', component: SurveyResultsComponent},
  


   //Respondend
   {path:'responded',component: RespondHomeComponent, canActivate:[AuthGuard]},

   //Page Not found Redirect
   {path:'404', component: NotfoundComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
