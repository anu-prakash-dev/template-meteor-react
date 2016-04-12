import React from 'react';
import reactMixin from 'react-mixin';

import AccountLogged    from './AccountLogged';
import AccountNotLogged from './AccountNotLogged';

import {controlUsername, controlEmail, controlPassword} from '/client/utilities/Utilities';



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
            <AccountLogged
              username  = {this.data.user.username}
              email     = {this.data.user.emails?this.data.user.emails[0].address:false}
              isEmailVerified = {this.data.user.emails?this.data.user.emails[0].verified:false}
              controlPassword = {controlPassword}
            />
            :
            <AccountNotLogged 
              openSnackBar = {this.props.openSnackBar}
              controlUsername = {controlUsername}
              controlEmail    = {controlEmail}
              controlPassword = {controlPassword}
            />
          }
            
        </section>
        
      </div>

    );
  }

};



reactMixin(Account.prototype, ReactMeteorData);
export default Account;