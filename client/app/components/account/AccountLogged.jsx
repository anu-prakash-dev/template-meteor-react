import React      from 'react';
import reactMixin from 'react-mixin';

import ChangeAvatar   from './items/ChangeAvatar';
import BasicInfo      from './items/BasicInfo';
import Logout         from './items/Logout';
import ChangePassword from './items/ChangePassword';

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
                openSnackBar   = {this.props.openSnackBar}
                username       = {this.props.username}
                email          = {this.props.email}
                isEmailVerified= {this.props.isEmailVerified}
              />
            </div>

            
            <Logout
              style={{width: '100%', marginTop: '10px'}}
              backgroundColor={Colors.blueMedium1}
            />

            <ChangePassword 
              openSnackBar    = {this.props.openSnackBar}
              controlPassword = {this.props.controlPassword} />
            
            
          </div>
      </div>
    )
  }
  

};


export default AccountLogged;