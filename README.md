AngularJS Contact Manager
========================

Simple Angular App
## Demo
Click here for the [demo](https://pacific-citadel-7823.herokuapp.com)
> If the demo isn't working, then the owner of the heroku instance might have taken it down. You may download this repo & follow instructions mentioned below & run it on your own.

## Steps to run the app
* Install all development dependencies:
  * nodejs, npm
  * bower
  * grunt
* If you're running this repo for the very first time, run `npm start`
* Subsequently demos can be launched by issuing simply `grunt` at the terminal
  * It triggers a build and runs a watch alongside
* To start the node-development server @port:3000, go to terminal and run: `node www`

## Unit Testing
* Run `grunt jasmine-unit` at terminal
* Run `node testserver` (automatic initialization isn't working)
* Check http://localhost:8000 for verifying if jasmine unit tests are running successfully
* 30% code coverage (as of now)
