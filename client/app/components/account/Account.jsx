import React from 'react';
import reactMixin from 'react-mixin';

import Login          from '../account/Login';
import CreateAccount  from '../account/CreateAccount';
import Profile        from '../profile/Profile';

import {controlUsername, controlEmail, controlPassword} from '../../../utilities/Utilities';



class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
    
  getMeteorData() {
    return { 
      user: Meteor.user(),
      loggingIn: Meteor.loggingIn(),
    }
  }
     
  render() {
    return (
  
      <div id="Account">

        <section>
          
          { Meteor.user() ?
            <Profile
              username  = {this.data.user.username}
              email     = {this.data.user.emails?this.data.user.emails[0].address:false}
              isEmailVerified = {this.data.user.emails?this.data.user.emails[0].verified:false}
              controlPassword = {controlPassword}
            />
            :''
          }
          
          { Meteor.user() ?
            ''
            :
            <Login 
              openSnackBar = {this.props.openSnackBar}
              controlUsername = {controlUsername}
              controlEmail    = {controlEmail}
              controlPassword = {controlPassword}
            />
          }
            
           {/*
          { Meteor.user() ?
            ''
            :
            <CreateAccount
              controlUsername = {controlUsername}
              controlEmail    = {controlEmail}
              controlPassword = {controlPassword}
            />
          }
           */}
            
        </section>
        
      </div>

    );
  }

};



reactMixin(Account.prototype, ReactMeteorData);
export default Account;