# Administration Manual
-The following is required to run the app on a new computer

## Prerequisites
1. Sign up on [Github][github]
2. Download [Node.js][nodejs] installer and run it.
- Verify that node is installed and working. In shell/command line, by typing  `node --version`
- Verify that npm is working, by typing `--npm --version`

## Installing
1. Clone the Github repository: 
- In shell/command line, type `git clone https://github.com/badServers/LateTermAssignment.git`
- Move to project directory, in shell/command line type, `cd LateTermAssignment`
2. Install npm
- In shell/command line, type `npm install`

## Running locally
- In shell/command line, type, `npm start` to start the Express server.

## Deployment on Heroku
1. Install the [Heroku toolbelt / CLI][heroku]
2. Login to Heroku from shell/command line, by typing `heroku login`
3. Push code to app. In shell/command line, type `git push heroku master`



[github]: https://github.com/
[nodejs]: https://nodejs.org/en/
[heroku]: https://devcenter.heroku.com/articles/heroku-cli