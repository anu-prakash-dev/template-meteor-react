//import Meteor from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export const sendVerificationEmail = (userId, email, callback) => {
  Accounts.sendVerificationEmail(
    userId, 
    email,
    (a)=>{
      typeof callback === "function" ? callback(a) : "";
    }
  )
}


// listner : ccounts.onEmailVerificationLink