

## [Meteor-React template App](http://template-meteor-react.meteorapp.com/)

[Demo](http://www.madeinmoon.io)


**Goals**

Provide a template app, with ready-to-go components, methods and services. 


**Tech**

Meteor(1.3), ES6, react(0.14.7), react-router(2.0.0-rc5)

Comming soon : [Apollo](https://github.com/apollostack/apollo/blob/master/design/high-level-reactivity.md) for data abstraction, and more

**It starts from**

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


### Features

#### Core

* meteor 1.3.1, react 0.14.7, react-router 2.0.0-rc5

#### Strucutre

* Folder & pages & scss reorganization

#### Account


* **Features**
  * Login / LoginGoogle/ LoginFacebook / Logout
  * CreateAccount / DeleteAccount
  * Avatar
    * avatarDisconnected  
    * avatarDefault (first letter of the username)
    * avatar (input->base64->mongodb)
  * ChangeAvatar
  * VerifyEmail
  * ChangePassword
  * ForgotPassword (send email with link)
  * ResetForgotPassword (from the email link)



* Meteor `account-ui`/`account-ui-unstyled` package **deleted**.

* loginWithPassword
  * **Only using** meteor **`accounts-password`** api and custom **css** `(app/scss/account.scss)`
* **Result**:  logical, re-usable, scalable and small react components, which allow to a custom UX.

* loginWith[Service]
  * Config:   `meteor add service-configuration`
  * Google:   `meteor add accounts-google`
  * Facebook: `meteor add accounts-facebook`

* Actual implementation: 

`in PageAccount.jsx & PageResetForgotPassword.jsx:`

    <PageAccount/>
      <Account/>

        if(!logged)
          <AccountNotLogged/>
          -  <Login/>
          -  <LoginGoogle/>
          -  <LoginFacebook/>
          -  <ForgotPassword/>
          -  <CreateAccount/>

        if(logged)
          <AccountLogged/>
          -  <ChangeAvatar/>
               <Avatar/>
          -  <BasicInfo/>
          -  <Logout/>
          -  <ChangePassword/>
          -  <DeleteAccount/>
             if(emailIsNotVerified)
               <VerifyEmail/>


    // landing on app after clicking on the email link (triggered by ForgotPassword
    <PageResetForgotPassword/>
       <ResetForgotPassword/>



#### Home

* coming soon : Display

#### Tasks List

* As the original repo
* (tasks: add, remove, edit, private/public, state, counter)


#### Showace UI

* Page Transitions [react-addons-css-transition-group](https://libraries.io/npm/react-addons-css-transition-group/0.15.0-alpha.1)
* [material-ui](http://www.material-ui.com/#/components/) (ripple buttons, loaders, snackbar, and more comming)
* [Halogen](http://madscript.com/halogen/) loaders
* react-motion [draggable list](https://github.com/chenglou/react-motion/tree/0627243316c564f6c2f480bf615b82135f649a0a/demos/demo8) ([demo](https://cdn.rawgit.com/chenglou/react-motion/043231a84e420ba1cc7f5b0ceb1753a6406d38f1/demos/demo8/index.html))
* react-motion   [animated list](https://github.com/chenglou/react-motion/tree/0627243316c564f6c2f480bf615b82135f649a0a/demos/demo8) ([demo](https://cdn.rawgit.com/chenglou/react-motion/043231a84e420ba1cc7f5b0ceb1753a6406d38f1/demos/demo3/index.html)) 

-------------------------

### TODO

* Customize Email for reset password
* in client/api/ -> create clean methods

-------------------------


### Next Steps

* Integrate [Apollo](https://github.com/apollostack/apollo/blob/master/design/high-level-reactivity.md) for data abstraction
* Server side rendering (wainting for [react-router-ssr support meteor1.3](https://github.com/thereactivestack/meteor-react-router-ssr/issues/45)), which will offer SEO possibilities
* Looking for [react-helmet](https://github.com/nfl/react-helmet) for SEO too.
* Doc in the [wiki](https://github.com/MadeInMoon/template-meteor-react/wiki)
* Better UI as a showcase
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
