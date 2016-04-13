// Server entry point (code executed server side only)
import { Meteor } from 'meteor/meteor';
import initialAdds from './config/initial_adds';
import {emailTemplate, emailMailUrl} from './config/email';

Meteor.startup(function () {
  
  initialAdds();
  
  emailMailUrl();
  emailTemplate();
  
});
