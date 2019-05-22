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

Spend alot of time on stackoverflow and reading material in general during the assignemt process. What I have learnt during this assignment is that it is vital to keep on top of the labs. I have hit so many snags in getting this far with the assignment that I feel if I had another 2 months I could still be adding functionality to this. I also found it very frustration to read that someone has had the snag as me and they got it working by trying X and X doesn't work for me. There are some things that remain a mystery as to parts of the app don't work. I am grateful to Diarmuid and Frank for all their teaching and help along the way.  



[model]: ./Model.JPG
[stories]: ./storybook.jpg
[Welcome]: ./Welcome.JPG
[header]: ./header.JPG
[footer]: ./footer.JPG
[AddBet]: ./AddBet.JPG
[BetList]: ./BetList.JPG
[Api]: ./apidata.jpg
