# Assignment 1 - ReactJS app.

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
$ npm start

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

+ Login - Displays welcome page with links to 2 user logins. Header + Footer static throughout.
+ /App/:userid - parameterized (:userid) per user - allowing bets to be added/edited/deleted for user and
  displays bet history

## Extra features

 Added Login details using React-Bootstrap library
 Added improved re-redenering to stop unnecessary rendering
 Passed userid from route to use in adding/editing/deleting 
 Used W3 library for footer 

## Independent learning.

Have played around with many libraries to get the app looking better but instead went back to basics. I have done lots of research on data validation and have implemented some, however none of which has worked as described in research articles. Had difficulty in getting the data to display using a table format but eventually I mananged to get it working. 



[model]: ./Model.jpg
[stories]: ./storybook.JPG
[Welcome]: ./Welcom.JPG
[header]: ./header.JPG
[footer]: ./footer.JPG
[AddBet]: ./AddBet.JPG
[BetList]: ./BetList.JPG

