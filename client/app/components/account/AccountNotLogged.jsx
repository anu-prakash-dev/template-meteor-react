import React      from 'react';
import reactMixin from 'react-mixin';
import {browserHistory} from 'react-router';

import ForgotPassword  from './items/ForgotPassword'
import CreateAccount   from './items/CreateAccount'
import Login           from './items/Login'

import {Colors}        from '/client/app/Theme';

import ButtonFLat           from '/client/app/components/ui/ButtonFlat'
import LoaderLinear         from '/client/app/components/ui/LoaderLinear'
import LoaderCircular       from '/client/app/components/ui/LoaderCircular'
import LoaderBounce         from '/client/app/components/ui/LoaderBounce'
import InputFloatingLabel   from '/client/app/components/ui/InputFloatingLabel'



class AccountNotLogged extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameErrorText: '', 
      passwordErrorText: '',
      timeout: 3500
    };
  }
  
  getMeteorData() {
    return { 
      user: Meteor.user(),
      loggingIn: Meteor.loggingIn(),
    }
  }
  
  render() {
    
    return (
      <div id="AccountNotLogged" className="account-box">
        
          <Login
            openSnackBar    = {this.props.openSnackBar}
            controlUsername = {this.props.controlUsername}
            controlEmail    = {this.props.controlEmail}
            controlPassword = {this.props.controlPassword}
          />  
        
          <ForgotPassword
            openSnackBar = {this.props.openSnackBar}
            controlEmail = {this.props.controlEmail}
          />  
          
         
          <CreateAccount
            openSnackBar    = {this.props.openSnackBar}
            controlUsername = {this.props.controlUsername}
            controlEmail    = {this.props.controlEmail}
            controlPassword = {this.props.controlPassword}
          />
          
         {/*{ this.data.loggingIn ?
            <LoaderLinear 
                backgroundColor={Colors.blueDark} 
                color={Colors.blueMedium1}/>
            : ''
        }
        */}
      </div>
    )
  }
  

};


reactMixin(AccountNotLogged.prototype, ReactMeteorData);
export default AccountNotLogged;