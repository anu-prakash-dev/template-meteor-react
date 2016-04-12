import React      from 'react';

import ForgotPassword  from './items/ForgotPassword'
import CreateAccount   from './items/CreateAccount'
import Login           from './items/Login'



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
          
      </div>
    )
  }
  

};


export default AccountNotLogged;