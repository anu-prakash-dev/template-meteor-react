import React from 'react';
import reactMixin from 'react-mixin';

import Login          from '../account/Login';
import Logout         from '../account/Logout';
import CreateAccount  from '../account/CreateAccount';
import ChangePassword from '../account/ChangePassword';
import Profile        from '../account/Profile';

// Shared methods
import {controlUsername, controlEmail, controlPassword} from '../../utilities/Utilities';



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
         
  componentDidMount() {
    //console.log(Users)
  }
     
  render() {
    return (
  
      <div id="Account">

        <section>
          
          {/*<p>{ Users.count()} </p>*/}
          
          { Meteor.user() ?
            <Profile
              username  = {this.data.user.username}
              email     = {this.data.user.emails?this.data.user.emails[0].address:false}
              isEmailVerified={this.data.user.emails?this.data.user.emails[0].verified:false}
            />
            :''
          }
          
          { Meteor.user() ?
            <Logout/>
            :
            <Login openSnackBar = {this.props.openSnackBar} />
          }
            
          { Meteor.user() ?
            <ChangePassword controlPassword = {controlPassword} />
            :
            <CreateAccount
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