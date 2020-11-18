# Settlers_of_Deere 
## SEI Capstone Project

## Description:
A John Deere twist on the popular Settlers of Catan Game. Users will be able to join games with other users, start games with their friends, and unlock new features the more they play!

## Example:
!["Game Play Page"](https://imgur.com/8Ifg81Y.png)

## Features / User Stories:
1. As a new user, I can create a profile with a profile image.
2. As a user, I can have an email associated with my profile in case I forget my password.
3. As a user, I don't have to create an account to play the game. 
4. As a user, I can see which of my friends are online.
5. As a user, I can create a new game room open to the public or just my friends.
6. As a user, my game board will not be the same each game. 
7. As a user, I can see my own statistics as well as the statistics of my friends.

## Wireframes:
!["Settlers of Deere Welcome Page"](https://imgur.com/KAmHyNC.png)
!["Settlers of Deere Lobby"](https://imgur.com/Z0dMbbR.png)
!["Settlers of Deere Game Page"](https://imgur.com/LhRFlAG.png)
## ERD:
!["ERD"](https://imgur.com/IA7cNc6.png)
## Technologies Used:
* Axios
* Classnames
* Express
* NodeJs
* Postgres
* React
* React-Redux
* Sequelize
* Styled-Components
* Socket.io

## Installation Instructions

## Requirements
### General Requirements
1. Be a complete Product  :white_check_mark:
2. Implement thoughtful user stories  :white_check_mark:
3. Be deployed online  :white_check_mark:
4. Use a new technology, not taught in class  :white_check_mark:

### MVP
#### Bronze
* Backend Developed NodeJs :white_check_mark:
* User sign up and login :white_check_mark:
* Hashed passwords and authentication :white_check_mark:
* User Profile - Full CRUD :white_check_mark:
* Basic board with placeable settlements and roads :white_check_mark:
* Leader board :white_check_mark:
* Instructions Page :white_check_mark:
* Track stats for each user :white_check_mark:


#### Silver
* Styled game board
* Animations on the game board when pieces are placed and robber is moved
* Upload own user image
* Chat with other players in room :white_check_mark:
* Achievements to unlock 
* Visit other users' profile pages
* Game Data Persists over refresh
* Multiple trades on the same round :white_check_mark:

### Gold
* User sets up own game board
* Expansion set with game board
* Sound effects and annimations associated with game events
* Multiplayer rooms
* Chat with opponent in room only
* Dive into the user data
* Drag and Drop for rearrange

### Fun Challenges
- Reduction in scope halfway through project
Originally bit off more than I could chew. Realize in refactoring the original code, the power of writing scaleable code.
- Heroku deployment was a mess. 
    In the recreation of my backend, followed steps that should have helped for easier deployment. Ended up needing different character cases for the columns and tables than the first deployment
- Working through socket.io
Was able to get the basic chat but ran into some time constraints for sending the data back and forth between the users.

## Contribute
- **Source Code:** https://github.com/DarDiet3/Yahtzee-Front
- **Backend** https://github.com/DarDiet3/Yahtzee-back
- **Issue Tracker** https://github.com/DarDiet3/Yahtzee-Front/issues