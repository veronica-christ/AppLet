# Group d SurvApp

# Prerequisites 
You must have installed the following
1. nodeJS
2. Angular CLI

To install nodeJS, visit this site: https://nodejs.org/en/ choose the LTS version
To install Angular, run the command "npm install -g @angular/cli" in the terminal

# Start the projects
Follow the following instructions
First clone it from the repository
Open the project with IDE
Open the terminal of the IDE, and run the commands: 
1. cd Backend
2. npm install

To run the backend, run the command: npm start

# Let's move over to the frontend, to run the frontend, run the commands: 
1. cd ../Frontend

To run the frontend, run the command: ng s -o

# This will run the project locally

# To view the project that is hosted, visit https://survapp.netlify.app/

# Instruction
1. click on 'get started' to register. 
2. log in as respondent or coordinator
3. As a respondent:
 * to take a survey, choosing one of the surveys active and answer the question
 * View the results by clicking the results button
 * A survey can only be taken once
4. As a coordinator:
 * click on the 'create survey' button to create a survey. 10 questions are required to make a survey
 * Define 1-5 mutually exclusive selections to each question
 * click 'save' so save a question and its answers
 * click 'submit' to submit a survey
 * Deactivate or activate a survey by clicking the 'change status' button
 * Delete a survey by clicking on the 'delete' button
 * invite a respondent to the site by clicking the 'Invite' button
5. log out by clicking the log out by clicking the 'log out' button on the top right


# user stories completed 
* Survey Coordinators and Survey Respondents can define, conduct, and view surveys and survey results from a common website
* Survey Coordinators can login to the app to access administrative functions, like defining a survey.
* Survey Coordinator can define a survey containing 1-10 multiple choice questions
* Survey Coordinator can define 1-5 mutually exclusive selections to each question
* Survey Coordinator can enter a title for the survey.
* Survey Coordinator can click a 'Cancel' button to return to the home page without saving the survey.
* Survey Coordinator can click a 'Save' button save a survey.
* Survey Coordinator can open a survey by selecting a survey from a list of previously defined surveys
* Survey Coordinators can close a survey by selecting it from a list of open surveys
* Survey Respondent can complete a survey by selecting it from a list of open surveys
* Survey Respondent can select responses to survey questions by clicking on a radio input
* Survey Respondents can see that a previously selected response will automatically be unchecked if a different response is clicked.
* Survey Respondents can click a 'Cancel' button to return to the home page without submitting the survey.
*  Survey Respondents can click a 'Submit' button submit their responses to the survey.
* Survey Respondents can see an error message if 'Submit' is clicked, but not all questions have been responded to.
* Survey Coordinators and Survey Respondents can select the survey to display from a list of closed surveys

# Bonus features
* Survey Respondents can create a unique account in the app
* Survey Respondents can login to the app
* Survey Respondents cannot complete the same survey more than once