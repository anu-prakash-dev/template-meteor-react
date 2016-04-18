// Server entry point (code executed server side only)
import { Meteor } from 'meteor/meteor';
import initialAdds                   from './config/initial_adds';
import {emailTemplate, emailMailUrl} from './config/email';
import {setGoogleAuthConfig}         from './config/authentification';
import {setFacebookAuthConfig}       from './config/authentification';
import {onCreateUser}                from './api/accounts';




setGoogleAuthConfig();
setFacebookAuthConfig();

onCreateUser();



Meteor.startup(function () {
  
  initialAdds();
  
  
  emailMailUrl();
  emailTemplate();
  

});

