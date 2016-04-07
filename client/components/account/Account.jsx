import React from 'react';
import reactMixin from 'react-mixin';

import Login          from '../account/Login';
import Logout         from '../account/Logout';
import CreateAccount  from '../account/CreateAccount';
import ChangePassword from '../account/ChangePassword';

// Shared methods
import {controlEmail, controlPassword} from '../../utilities/Utilities';
 


class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
    
  getMeteorData() {
    return { 
      user: Meteor.user(),
      users: Meteor.users.find().count(),
      loggingIn: Meteor.loggingIn(),
    }
  }
     
  render() {
    return (
  
      <div id="Account">

        <section>
            
          
          <p> { this.data.user?this.data.user.username:''}</p>
          
          { Meteor.user() ?
            <Logout/>
            :
            <Login openSnackBar = {this.props.openSnackBar} />
          }
            
          { Meteor.user() ?
            <ChangePassword/>
            :
            <CreateAccount
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