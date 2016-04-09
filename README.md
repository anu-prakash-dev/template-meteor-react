

## Meteor-React template App

[Demo](http://template-meteor-react.meteorapp.com/home)


##### Goals

Provide a template app, with ready-to-go components, methods and services. 


##### Tech

Meteor(1.3), ES6, react(0.14.7), react-router(2.0.0-rc5)

Comming soon : [Apollo](https://github.com/apollostack/apollo/blob/master/design/high-level-reactivity.md) for data abstraction, and more

##### It starts from

this repo: [AnnotatedJS/meteor-react-start-app](https://github.com/AnnotatedJS/meteor-react-start-app) (Thanks to [Mr Post])(https://github.com/AnnotatedJS)!




-------------------------


### Usage

Clone
> $ git clone https://github.com/MadeInMoon/template-meteor-react

Install node modules (just once)
> $ npm install 

Build & Run
> $ meteor

Play
> http://localhost:3000/

-------------------------


### New Features

##### Core

* meteor 1.3.1 & react 0.14.7

##### Strucutre

* Folder & pages & scss reorganization

##### Account

* Replaced default meteor account-ui , by components (Login.jsx, CreateAccount.jsx, Logout.jsx etc..), with meteor Account&Password api

##### UI

* Page Transitions [react-addons-css-transition-group](https://libraries.io/npm/react-addons-css-transition-group/0.15.0-alpha.1)
* [material-ui](http://www.material-ui.com/#/components/) (ripple buttons, snackbar, and more comming)
* react-motion [draggable list](https://github.com/chenglou/react-motion/tree/0627243316c564f6c2f480bf615b82135f649a0a/demos/demo8) ([demo](https://cdn.rawgit.com/chenglou/react-motion/043231a84e420ba1cc7f5b0ceb1753a6406d38f1/demos/demo8/index.html))
* react-motion   [animated list](https://github.com/chenglou/react-motion/tree/0627243316c564f6c2f480bf615b82135f649a0a/demos/demo8) ([demo](https://cdn.rawgit.com/chenglou/react-motion/043231a84e420ba1cc7f5b0ceb1753a6406d38f1/demos/demo3/index.html)) 

-------------------------

### TODO

* Fix ListAnimated [issue](https://github.com/chenglou/react-motion/issues/319) 
* Little code cleaning

-------------------------


### Next Steps

* Integrate [Apollo](https://github.com/apollostack/apollo/blob/master/design/high-level-reactivity.md) for data abstraction
* Server side rendering (wainting for [react-router-ssr support meteor1.3](https://github.com/thereactivestack/meteor-react-router-ssr/issues/45)), which will offer SEO possibilities
* CreateAccount with email validation
* Better UI as a showcase
* Looking for [react-helmet](https://github.com/nfl/react-helmet) for SEO too.
* Doc in the [wiki](https://github.com/MadeInMoon/template-meteor-react/wiki)
* and more..


-------------------------


### [Original](https://github.com/AnnotatedJS/meteor-react-start-app) Features

This app isn’t done yet. If you think something is missing or wrong, just sent me an email.

This start-app contains:
* Meteor release 1.3-rc.3 with React and React Router
* NPM Packages: react@15.0.0-rc.1 react-dom@15.0.0-rc.1 react-router@2.0.0-rc5 history@2.0.0-rc2  react-mixin babel@6.5.1
* ES6: arrow functions
* User Login (create account, login/logout, change password)
* Router
* Pages
* >Dynamic Task page with all features of MDG's simple-todos-react, such as:
  * Add a new task
  * Edit the text of an existing task
  * List of tasks
  * Counter with number of not completed tasks
  * Filter or not completed tasks
  * Change tasks from public to private and vice versa
  * Change tasks from not-completed to completed and vice versa
  * Remove tasks
