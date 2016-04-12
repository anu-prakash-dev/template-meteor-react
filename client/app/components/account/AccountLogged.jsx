import React      from 'react';
import reactMixin from 'react-mixin';

import Logout         from './items/Logout';
import ChangeAvatar   from './items/ChangeAvatar';
import ChangePassword from './items/ChangePassword';

import {Colors} from '/client/app/Theme';

class AccountLogged extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }  
  
  getMeteorData() {
    return { 
      user: Meteor.user(),
      //loggingIn: Meteor.loggingIn(),
      //isAuthenticated: Meteor.userId() !== null
    }
  }

  render() {
    return (
      <div id="AccountLogged" className="account-box">
          <div className="content">
        
            <div className="flex">
              
              <ChangeAvatar/>
              
              <div id>
                <p id="textUsername" onClick={this.updateUserAvatar}> {this.props.username} </p>

                { this.props.email ?
                  <p id="textEmail"> {this.props.email} </p>
                  :''
                }
                { this.props.isEmailVerified ?
                  <p id="textEmailStatut"> (verified) </p>
                  :
                  <p id="textEmailStatut"> (not verified) </p>
                }
                
              </div>
            </div>

            <Logout
              style={{width: '100%', marginTop: '10px'}}
              backgroundColor={Colors.blueMedium1}
            />

            <ChangePassword controlPassword = {this.props.controlPassword} />
            
          </div>
      </div>
    )
  }
  

};

//reactMixin(AccountLogged.prototype, ReactMeteorData);
export default AccountLogged;