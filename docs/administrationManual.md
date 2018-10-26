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
Heroku offers a great [step-by-step][herokudeploy] introduction for deploying node applications on Heroku, if you get
stuck somewhere, head over there to check that out.

1. Sign up for free on Heroku.com.
2. Setup the Heroku Toolbelt
3. Sign in using the Heroku Toolbelt
4. Follow [step-by-step guide][herokudeploy] on Heroku


[github]: https://github.com/
[nodejs]: https://nodejs.org/en/
[heroku]: https://devcenter.heroku.com/articles/heroku-cli
[herokudeploy]: https://devcenter.heroku.com/categories/nodejs-support