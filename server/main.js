import Config from './config';


// Server entry point (code executed server side only)


Meteor.startup(function () {
  
  // required for Email service (forgotPassword etc..)
  process.env.MAIL_URL = Config.MAIL_URL;

});
