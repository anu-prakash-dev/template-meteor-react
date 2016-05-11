

## [Meteor-React template App](http://meteor-react-template-app.madeinmoon.io/)


Work In Progress!! (advices, questions or contributions are very welcome!)


[Hosted Demo](http://meteor-react-template-app.madeinmoon.io/)


**Reason to be**

Provide a template app

- react-router with page transitions (css)
- livequery+ddp for data real-time (waiting for [Apollo](https://github.com/apollostack/apollo/blob/master/design/high-level-reactivity.md))
- custom `Accounts` services (login etc..)
- high order components, scalable, re-usable
- shared, clean & safe methods.
- UI components ([material-ui](http://www.material-ui.com/#/) and more)
- A "clean" presentation, with Material-UI, but easily changeable

Inspired by [Mantra](https://github.com/kadirahq/mantra), an architecture, breaking with the universal concept of meteor, for future-proof apps, with a high-maintainability ([here](https://kadirahq.github.io/mantra/).


**Tech**

Meteor, ES6, npm, react, react-router

Comming soon : [Apollo](https://github.com/apollostack/apollo/blob/master/design/high-level-reactivity.md) for data abstraction, using graphQL (reactive data with mongodb, rest or sql)

**It starts from**

this repo: [AnnotatedJS/meteor-react-start-app](https://github.com/AnnotatedJS/meteor-react-start-app) (Thanks to [Mr Post])(https://github.com/AnnotatedJS)!




-------------------------

### [Mini-Doc](https://github.com/MadeInMoon/template-meteor-react/wiki)

- [Usage](https://github.com/MadeInMoon/template-meteor-react/wiki/Usage)


-------------------------


### Features

* meteor@1.3.2.4, react@15.0.1, react-router@15.0.1, material-ui@0.15.0-beta.2


#### Page Transitions

- [react-addons-css-transition-group](https://www.npmjs.com/package/react-addons-css-transition-group)

#### Page Contents

- PageAccount
  - Account: login, createAccount, etc..
- PageHome
  - todo
- PageTasks
  - Tasks (add, remove, edit, private/public, state, counter)
- PageShowcase
  - [material-ui](http://www.material-ui.com/#/components/) left drawer (swipable on mobile!)
  - [material-ui](http://www.material-ui.com/#/components/) (ripple buttons, loaders, snackbar, and more comming)
  - [Halogen](http://madscript.com/halogen/) loaders
  - react-motion [draggable list](https://github.com/chenglou/react-motion/tree/0627243316c564f6c2f480bf615b82135f649a0a/demos/demo8) ([demo](https://cdn.rawgit.com/chenglou/react-motion/043231a84e420ba1cc7f5b0ceb1753a6406d38f1/demos/demo8/index.html))
  - react-motion [animated list](https://github.com/chenglou/react-motion/tree/0627243316c564f6c2f480bf615b82135f649a0a/demos/demo8) ([demo](https://cdn.rawgit.com/chenglou/react-motion/043231a84e420ba1cc7f5b0ceb1753a6406d38f1/demos/demo3/index.html)) 

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


#### External Services

- Galaxy:   app hosting
- mLab:     monogdb hosting
- A Domain Name Registrar
- Mailgun:  email service


#### External Api

- Google (for login)
- Facebook (for login)

-------------------------


### Next Steps

* Find the perfect folder strucutre
* Image upload
* More UI components
* Full doc in the [wiki](https://github.com/MadeInMoon/template-meteor-react/wiki)
* Integrate [Apollo](https://github.com/apollostack/apollo/blob/master/design/high-level-reactivity.md) for data abstraction


-------------------------


