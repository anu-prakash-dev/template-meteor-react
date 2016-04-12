import React    from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './app/Routes';


// if Landing on app from forgotMail link email
Accounts.onResetPasswordLink((token)=>{
  
  // Triggered when users arrive from a forgotMail link (email). Should be on top of 'Meteor.startup()'
  // in App.jsx/componentWillMount() : redirection to '/forgot-password' is 'onResetPasswordLink'==true
  
  Session.set({
    onResetPasswordLink: true,
    onResetPasswordLinkToken: token
  })
  
});
   

// App Start
Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(<Routes/>, document.getElementById("App-wrapper"));
});
