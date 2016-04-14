import { Accounts } from 'meteor/accounts-base';

//export const sendVerificationEmail = (userId, email, callback) => {


  Meteor.methods({
    sendVerificationEmail: (userId, email, callback)=> {
      Accounts.sendVerificationEmail(
        userId, 
        email,
        (a)=>{
          typeof callback === "function" ? callback(a) : "";
        }
      )
        
    }
  });

  
/*  Meteor.methods({
    sendEmail: function (to, from, subject, text) {
      check([to, from, subject, text], [String]);

      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();

      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
    }
  });*/

  
  
//}


// listner : ccounts.onEmailVerificationLink