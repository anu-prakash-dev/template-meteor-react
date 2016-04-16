import React      from 'react';

import ChangeAvatar   from './items/ChangeAvatar';
import BasicInfo      from './items/BasicInfo';
import VerifyEmail    from './items/VerifyEmail';
import ChangePassword from './items/ChangePassword';
import Logout         from './items/Logout';
import {Colors} from '/client/app/Theme';



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
            <ChangeAvatar openSnackBar={this.props.openSnackBar} />     

            <BasicInfo
              userId         = {this.props.userId}
              username       = {this.props.username}
              email          = {this.props.email}
              isEmailVerified= {this.props.isEmailVerified}
              openSnackBar   = {this.props.openSnackBar}
            />
          </div>


          <VerifyEmail
            isEmailVerified = {this.props.isEmailVerified}
            userId          = {this.props.userId}
            email           = {this.props.email}
            openSnackBar    = {this.props.openSnackBar}
          />

          { this.props.user.service === 'intern' ?
              <ChangePassword 
                controlPassword = {this.props.controlPassword}
                openSnackBar    = {this.props.openSnackBar}
              />
            : 
              ''
          }

          <Logout
            style={{width: '100%'}}
            backgroundColor={Colors.blueMedium1}
          />


        </div>
      </div>
      
    )
  }
  

};


export default AccountLogged;