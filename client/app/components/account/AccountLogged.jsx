import React      from 'react';

import ChangeAvatar   from './items/ChangeAvatar';
import BasicInfo      from './items/BasicInfo';
import VerifyEmail    from './items/VerifyEmail';
import ChangePassword from './items/ChangePassword';
import Logout         from './items/Logout';
import DeleteAccount  from './items/DeleteAccount';



class AccountLogged extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }  

  render() {
    
    return (
      
      <div id="AccountLogged" className="account-box">
        <div className="content">

          <div className="flex">
            <ChangeAvatar 
              openSnackBar        = {this.props.openSnackBar} 
              btnBackgroundColor  = {this.props.btnBackgroundColor}
              openDialogContainer = {this.props.openDialogContainer}
            />     

            <BasicInfo
              userId         = {this.props.userId}
              username       = {this.props.username}
              email          = {this.props.email}
              isEmailVerified= {this.props.isEmailVerified}
              openSnackBar   = {this.props.openSnackBar}
              btnBackgroundColor={this.props.btnBackgroundColor}
            />
          </div>


          <VerifyEmail
            isEmailVerified = {this.props.isEmailVerified}
            userId          = {this.props.userId}
            email           = {this.props.email}
            openSnackBar    = {this.props.openSnackBar}
            btnBackgroundColor={this.props.btnBackgroundColor}
          />

          { this.props.user.service === 'intern' ?
              <ChangePassword 
                controlPassword = {this.props.controlPassword}
                toggleRoll      = {this.props.toggleRoll}
                openSnackBar    = {this.props.openSnackBar}
                btnBackgroundColor={this.props.btnBackgroundColor}
              />
            : 
              ''
          }

          <Logout
            style={{width: '100%'}}
            btnBackgroundColor={this.props.btnBackgroundColor}
          />

          <DeleteAccount
            style={{width: '100%'}}
            btnBackgroundColor={this.props.btnBackgroundColor}
            toggleRoll = {this.props.toggleRoll}
            user  = {this.props.user}
          />


        </div>
      </div>
      
    )
  }
  

};


export default AccountLogged;