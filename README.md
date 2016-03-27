

## Meteor-React start-app

From originial repo: [AnnotatedJS/meteor-react-start-app](https://github.com/AnnotatedJS/meteor-react-start-app)


## Run

Install npm modules (just once)
> $ npm install 

Build 
> $ meteor -p 3003

See
> http://localhost:3003/


## Original Features

This app isn’t done yet. If you think something is missing or wrong, just sent me an email.

This start-app contains:
* Meteor release 1.3-rc.3 with React and React Router
* NPM Packages: react@15.0.0-rc.1 react-dom@15.0.0-rc.1 react-router@2.0.0-rc5 history@2.0.0-rc2  react-mixin babel@6.5.1
* ES6: arrow functions
* A reactive lay-out based on flexbox with a header, body and a footer and three columns
* User Login (create account, login/logout, change password)
* Router with Navigation buttons
* Some static 'pages': Home, Admin and NotFound
* >Dynamic Task page with all features of MDG's simple-todos-react, such as:
  * Add a new task
  * Edit the text of an existing task
  * List of tasks
  * Counter with number of not completed tasks
  * Filter or not completed tasks
  * Change tasks from public to private and vice versa
  * Change tasks from not-completed to completed and vice versa
  * Remove tasks

## New Features

* Folder & pages reorganization
* Scss
* Page Transitions [react-addons-css-transition-group 0.15.0-alpha.1](https://libraries.io/npm/react-addons-css-transition-group/0.15.0-alpha.1)


## Original Fixtures

The following users are created automatically (all with password "password"):
* UserOne
* UserTwo

Also, the following tasks are created automatically (all created by UserOne):
* Public Not Completed Task 1
* Public Completed 2
* Private Not Completed Task 3
* Private Completed Task 4
