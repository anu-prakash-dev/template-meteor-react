import React from 'react';
import reactMixin from 'react-mixin';

import AccountLogged    from './AccountLogged';
import AccountNotLogged from './AccountNotLogged';

import {controlUsername, controlEmail, controlPassword} from '/client/utilities/Utilities';

import {Colors} from '/client/app/Theme';


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

  toggleRoll(context) {
    context.setState({ isRollOpen: !context.state.isRollOpen });
  }
  
  render() {
    
    return (
  
      <div id="Account">

        <section>
          
          { this.props.user ?
              <AccountLogged
                openSnackBar = {this.props.openSnackBar}
                username     = {this.data.user.username}
                userId       = {this.data.user._id}
                email        = {this.data.user.emails?this.data.user.emails[0].address:false}
                isEmailVerified = {this.data.user.emails?this.data.user.emails[0].verified:false}
                controlPassword = {controlPassword}
                user            = {this.props.user}
                toggleRoll = {this.toggleRoll}
                btnBackgroundColor ={Colors.secondary}
              />
            :
              <AccountNotLogged 
                openSnackBar    = {this.props.openSnackBar}
                controlUsername = {controlUsername}
                controlEmail    = {controlEmail}
                controlPassword = {controlPassword}
                user            = {this.props.user}
                toggleRoll = {this.toggleRoll}
                btnBackgroundColor ={Colors.secondary}
              />
          }
            
        </section>
        
      </div>

    );
  }

};



reactMixin(Account.prototype, ReactMeteorData);
export default Account;