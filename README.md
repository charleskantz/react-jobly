# Jobly

Jobly is a React-based job app featuring account creation, profile editing, protected routes, and pretty nice styling!

[Live Demo](https://jobly.charleskantz.com "Jobly")

## Technologies
* React.js
* Node Express.js
* PostgreSQL
* Emotion/styled
* Formik / Yup

## Features
* Account creation, login, logout -> uses authorization and authentication middleware to protect private routes
* Profile editing
* Search Companies & Jobs: browse and search hiring companies and view the jobs posted by each company. Search query is debounced and automatically searched.
* Apply to jobs

## Getting Started on the Server
* Clone the repository
* cd server
* npm install
* createdb jobly
* createdb jobly-test
* psql jobly < data.sql
* npm start
* npm test to run the tests

## Getting Started on the Client
* cd ../client
* npm install
* npm start
* npm test to run the tests

### Note
The deployed version of this app uses a backend written by Rithm School (this was so that students could start with the same codebase when building out the React frontend). I have written my own version of the backend [which can be found here](https://github.com/charleskantz/express-jobly).