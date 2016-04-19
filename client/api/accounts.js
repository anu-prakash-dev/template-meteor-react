import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import {googleAuth, facebookAuth} from '/client/api/authentification';




export const createAccount = (username, email, password, callback) => {

  const options={
    username: username,
    email:    email,
    password: password,
    profile: {
      avatar:  '',
      last_name:  '',
      first_name: '',
      gender:  '',
      local:   '',
      age:     '',
      city:    '',
      country: ''
    },
  }

  Accounts.createUser(options, callback);
  
}

export const deleteAccount = (userId, callback) => {
  Meteor.users.remove({_id: userId}, callback);  
}



export const loginWithPassword = (username, password, callback) => {
   Meteor.loginWithPassword(username, password, callback);
}

export const loginWithGoogle = (callback) => {
    
    const options = {
      redirectUrl: googleAuth.getRedirectUrl(),
      requestOfflineToken:true,
      loginStyle: 'popup',
      prompt: 'select_account',
      //loginHint:'user_email@gmail.com',
      //loginUrlParameters:'',
    }
    
    Meteor.loginWithGoogle(options, callback);
  
}

export const loginWithFacebook = (callback) => {
    
    const options = {
      redirectUrl: facebookAuth.getRedirectUrl(),
      requestOfflineToken:true,
      loginStyle: 'popup',
      // forceApprovalPrompt: true, // doesn't work
    }

    Meteor.loginWithFacebook(options, callback);
  
}

export const logout = () => {
  Meteor.logout();
}



export const changeAvatar = (avatar, callback) => {
    Meteor.users.update(
      Meteor.userId(),
      {$set: 
        { "profile.avatar": avatar }
      }, 
      null,
      callback
    );
}

export const deleteAvatar = (callback) => {
  Meteor.users.update(
    Meteor.userId(),
    {$set:
      { "profile.avatar": '' }
    }, 
    null,
    callback
  );
}



export const changePassword = (password, passwordNew, callback) => {
  Accounts.changePassword(password, passwordNew, callback);
}

export const resetForgetPassword = (token, password, callback) => {
  Accounts.resetPassword(token, password, callback);     
}

export const forgotPassword = (email, callback) => {
  Accounts.forgotPassword({email: email}, callback);
}

export const sendVerificationEmail = (userId, email, callback) => {
    Meteor.call(
      'sendVerificationEmail',
      userId, 
      email, 
      callback
    );
}
