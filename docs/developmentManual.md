# Development Manual
-The following is required for a new programmer to join the team and start conrtibuting

## Prerequisites
1. Sign up on [Github][github]
2. Download [Node.js][nodejs] installer and run it.
- Verify that node is installed and working in Git Bash, by typing  `node --version`
- Verify that npm is working, by typing `--npm --version`

## Installing
1. Clone the Github repository: 
- In Git Bash, type `git clone https://github.com/badServers/LateTermAssignment.git`
- Move to project directory, in Git Bash type, `cd LateTermAssignment`
2. Install npm
- In Git Bash, type `npm install`

## Running tests
 This repository uses [Jest][jest] testing framework and [Supertest][supertest].
 - To run the tests, in Git Bash type, `npm test`

## Running locally
- In Git Bash, type, `npm start to start` the Express server.

## Deployment on Heroku
1. Install the [Heroku toolbelt / CLI][heroku]
2. Login to Heroku from Git Bash, by typing `heroku login`
3. Push code to app. In Git Bash, type `git push heroku master`



[github]: https://github.com/
[nodejs]: https://nodejs.org/en/
[jest]: https://jestjs.io/
[supertest]: https://github.com/visionmedia/supertest
[heroku]: https://devcenter.heroku.com/articles/heroku-cli