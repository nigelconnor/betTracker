# Assignment 2 - ReactJS app.

Name: Nigel O'Connor

## Overview.
The BetTracker app is to allow a user to track their bets in one place. People may have bets with many bookies which is difficult to manange.

## Features
 
 + Add bet
 + Edit bet
 + Delete bet
 + Show all current bets

## Installation requirements.

$ git clone https://github.com/nigeloconnor/betTracker.git
$ cd betTracker
$ npm install
$ npm start   - this will start React App
$ cd betTracker/Api/
$ npm install
$ npm start   - this will start Api

$ MongoDB should also be installed on computer

$ npx start-storybook -p 9001 -c .storybook

## Data Model Design.

The following is the data model design. 

![][model]

## App Component Design.

Some basic Storybook functionality   

![][stories]


## UI Design.

![][Welcome]
![][header]
![][footer]
![][AddBet]
![][BetList]


## Routing.

![][Api]
+ Login - Displays login screen. Header + Footer static throughout.
+ / - Once user logs in successfully BetTracker page shows bets to be added/edited/deleted and
  displays bet history

## Extra features

Bootstrap
Storybook
loadsh
Babel
Nodemon
dotenv
express
Mongoose
express async handler
passport / jwt / hashing and salting
axios


## Independent learning.

Have played around with many libraries to get the app looking better but instead went back to basics. I have done lots of research on data validation and have implemented some, however none of which has worked as described in research articles. Had difficulty in getting the data to display using a table format but eventually I mananged to get it working. 



[model]: ./Model.JPG
[stories]: ./storybook.jpg
[Welcome]: ./Welcome.JPG
[header]: ./header.JPG
[footer]: ./footer.JPG
[AddBet]: ./AddBet.JPG
[BetList]: ./BetList.JPG
[Api]: ./apidata.jp

