# Goal Setter App
## Submission for Future Ready Talent Internship

## Problem Statement
These days students are preparing for their competitive exams and need a routine to follow. They need a place where they can store their daily goals and strike them out when they complete them. Hence, the following project is made to help such students achieve their goals
<br><br><hr>

### Working Demo of the WebApp
https://user-images.githubusercontent.com/61956975/175784817-9b02cc72-6269-4384-96d4-2c271813f4d2.mp4

### Application hosted at https://goalsetterharry.herokuapp.com/

## Solution
A platform where the user can log in and list and view their daily, weekly, and monthly goals. The web app is secured with JWT authentication which uses the JWT algorithm to hash the user's password, hence, protecting the user's goals. No one except the user is able to view or edit or delete their goals. Once, logged in the user is able to view their dashboard. The Dashboard contains the goals entered but the users with the date and time at which the goal was entered. The user is given the feature to delete the goal if they wish to. All these goals and the user data are stored in Azure CosmosDB. The framework used for building this app is React and Express and NodeJs are used to build the backend of the app.

- The applicaiton uses **Cosmos DB API for Mongo DB** to store all teh information about the user and their goals. 
- It also uses **Analytics** to monitor the traffic on the Application.
- **Azure functions** are used to trigger data when the user is logged in which is sent to the analytics monitoring the webapp
