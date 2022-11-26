import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  currentSuvey:any;

  cardDataList:any = []
  productList = new BehaviorSubject<any>([])
  constructor() { }
  surevy = 
[
	{
		title: "Socal Media Surve",
		description: "This is a survey about social media.",
		status: "active",
		questions:
		{
			 quesion1 :
			 {
			 	question: 'How old are you?',
	    		option:
	    		{
	     			one: "16-18",
	     			two: "18-29",
	     			three: "29-35"
	   			 }
			},
			 quesion2 :
			 {
			 	question: 'Do you use social media?',
	    		option:
	    		{
	     			one: "yes",
	     			two: "no",
	     			three: "sometimes"
	   			 }
			},
			 quesion3 :
			 {
			 	question: 'Which social media do you use the most?',
	    		option:
	    		{
	     			one: "Facebook",
	     			two: "Instagram",
	     			three: "Twitter"
	   			 }
			},
			 quesion4 :
			 {
			 	question: 'How many hours to you spend on social media per day',
	    		option:
	    		{
	     			one: "0-2",
	     			two: "2-4",
	     			three: "4-6"
	   			 }
			},
			 quesion5 :
			 {
			 	question: 'What do you use social media for?',
	    		option:
	    		{
	     			one: "Personal",
	     			two: "Business",
	     			three: "Work"
	   			 }
			},
			 quesion6 :
			 {
			 	question: 'Do think social media is good?',
	    		option:
	    		{
	     			one: "Yes",
	     			two: "No",
	     			three: "Maybe"
	   			 }
			},
			 quesion7 :
			 {
			 	question: 'Have you gained anything from using social media?',
	    		option:
	    		{
	     			one: "Yes",
	     			two: "No",
	     			three: "Maybe"
	   			 }
			},
			 quesion8 :
			 {
			 	question: 'How often do you post on your page?',
	    		option:
	    		{
	     			one: "Once every hour",
	     			two: "Once a day",
	     			three: "Once a week"
	   			 }
			},
			 quesion9 :
			 {
			 	question: 'When do you check social media?',
	    		option:
	    		{
	     			one: "Immediately you open your eyes",
	     			two: "When you thought of it",
	     			three: "Only when you receive a notification"
	   			 }
			},
			 quesion10 :
			 {
			 	question: 'ould you recommend social media to anyone?',
	    		option:
	    		{
	     			one: "Yes",
	     			two: "No",
	     			three: "Maybe"
	   			 }
			},
		}
	},
	{
		title: "Pets Survey",
		description: "This is a survey about Pets",
		status: "active",
		questions:
		{
			 quesion1 :
			 {
			 	question: 'Are you a pet lover?',
	    		option:
	    		{
	     			one: "Yes",
	     			two: "No",
	     			three: "Maybe"
	   			 }
			},

			 quesion2 :
			 {
			 	question: ' Do you have pet?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},

			 quesion3 :
			 {
			 	question: 'How old is your pet?',
	    		option:
	    		{
	     			one: "1 year",
	     			two: "5 years",
	     			three: "5+ years"
	   			 }
			},

			 quesion4 :
			 {
			 	question: 'What kind of a pet do you have?',
	    		option:
	    		{
	     			one: "Dog",
	     			two: "Cat",
	     			three: "Other"
	   			 }
			},

			 quesion5 :
			 {
			 	question: 'Do you take your pet to the vent?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},

			 quesion6 :
			 {
			 	question: 'If yes, How often do you take your pet to the vent?',
	    		option:
	    		{
	     			one: "Once a month",
	     			two: "Once every 3 months",
	     			three: "Only when it is not feeling well"
	   			 }
			},

			 quesion7 :
			 {
			 	question: 'Do spend time with your pet?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},

			 quesion8 :
			 {
			 	question: 'How often do you spend time with your pet?',
	    		option:
	    		{
	     			one: "all the time",
	     			two: "When I get a chance",
	     			three: "Never"
	   			 }
			},

			 quesion9 :
			 {
			 	question: 'Do you talk to your part as a friend?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},

			 quesion10 :
			 {
			 	question: 'How do you feel about people who don\'t like or own pets?',
	    		option:
	    		{
	     			one: "I do not have a problem with them",
	     			two: "I pretend around them",
	     			three: "I do not like them"
	   			 }
			},
			
		}
	},
	{
		title: "Alcohol Survey",
		description: "This is a survey about alcohol consumption",
		status: "deactive",
		questions:
		{
			 quesion1 :
			 {
			 	question: 'Do you drink alcohol?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},
			 quesion2 :
			 {
			 	question: 'How often do you drink?',
	    		option:
	    		{
	     			one: "Everyday",
	     			two: "Once a week",
	     			three: "Once after some weeks"
	   			 }
			},
			 quesion3 :
			 {
			 	question: 'how old are you?',
	    		option:
	    		{
	     			one: "Under 18",
	     			two: "18-25",
	     			three: "Gr25-35eat"
	   			 }
			},
			 quesion4 :
			 {
			 	question: 'How often do you have 6 or more drinks in one occassion?',
	    		option:
	    		{
	     			one: "Never",
	     			two: "Weekly",
	     			three: "Monthly"
	   			 }
			},
			 quesion5 :
			 {
			 	question: 'Have you ever been in trouble because of your drinking?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},
			 quesion6 :
			 {
			 	question: 'Is alcohol good for your body?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},
			 quesion7 :
			 {
			 	question: 'Have you ever been in a hospital because of drinking?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},
			 quesion8 :
			 {
			 	question: 'Is it getting difficult to stop drinking alcohol?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},
			 quesion9 :
			 {
			 	question: 'Would you stop drnking alcohol?',
	    		option:
	    		{
            one: "Yes",
            two: "No",
            three: "Maybe"
	   			 }
			},
			 quesion10 :
			 {
			 	question: 'Do you have a problem with people who do not drink alcohol?',
	    		option:
	    		{
	     			one: " I do not have a problem with them",
	     			two: "I pretend around them",
	     			three: "I do not like them"
	   			 }
			},
		}
	}
]

getAllSurvey(){
  return this.surevy
}
  getSuvry(id: number){
    return this.surevy[id]
  }
  takingSurvey(id: number){
    this.currentSuvey = id;
  }

  deleteSurvey(id:number){
        this.surevy.splice(id,1)
  }

  updateStatus(status:string, id:number){
    if ( status== "active") {
      this.surevy[id].status = "deactive"
    }else{
      this.surevy[id].status = "active"
    }
	
  }
add(data:any){
	this.surevy.push(data);
}
}
