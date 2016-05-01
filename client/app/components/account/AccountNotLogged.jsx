import React      from 'react';

import ForgotPassword  from './items/ForgotPassword'
import CreateAccount   from './items/CreateAccount'
import Login           from './items/Login'
import LoginGoogle     from './items/LoginGoogle'
import LoginFacebook   from './items/LoginFacebook'



class AccountNotLogged extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div id="AccountNotLogged" className="account-box">
        
          <Login
            openSnackBar    = {this.props.openSnackBar}
            toggleRoll      = {this.props.toggleRoll}
            controlUsername = {this.props.controlUsername}
            controlEmail    = {this.props.controlEmail}
            controlPassword = {this.props.controlPassword}
            btnBackgroundColor={this.props.btnBackgroundColor}
          />          
        
          <LoginGoogle
            openSnackBar    = {this.props.openSnackBar}
            btnBackgroundColor={this.props.btnBackgroundColor}
          />     
            
          <LoginFacebook
            openSnackBar    = {this.props.openSnackBar}
            btnBackgroundColor={this.props.btnBackgroundColor}
          />  
        
          <ForgotPassword
            openSnackBar = {this.props.openSnackBar}
            toggleRoll   = {this.props.toggleRoll}
            controlEmail = {this.props.controlEmail}
            btnBackgroundColor={this.props.btnBackgroundColor}
          />  
         
          <CreateAccount
            openSnackBar    = {this.props.openSnackBar}
            toggleRoll      = {this.props.toggleRoll}
            controlUsername = {this.props.controlUsername}
            controlEmail    = {this.props.controlEmail}
            controlPassword = {this.props.controlPassword}
            btnBackgroundColor={this.props.btnBackgroundColor}
          />
          
      </div>
    )
  }
  

};


export default AccountNotLogged;