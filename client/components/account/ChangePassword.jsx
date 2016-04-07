import React from 'react';
import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'
import InputFloatingLabel      from '../../components/ui/InputFloatingLabel'


class ChangePassword extends React.Component{

  constructor(props) {
    super(props);
    //this.logout = this.logout.bind(this);
    this.handleChange    = this.handleChange.bind(this);
    this.changePassword  = this.changePassword.bind(this);
    //this.getMeteorData = this.getMeteorData.bind(this);
    this.state = {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    };
  }
  
//  getMeteorData() {
//    return {
//      user: Meteor.user(),
//      isLoginIn: Meteor.loggingIn()
//    }
//  }

  
  handleChange(event){
    var inputName = event.target.name;
    var value     = event.target.value;
    
    var nextState  = {};
    nextState[inputName] = value;
    
    this.setState(nextState);
  }  
  
  changePassword(){
    var currentPassword     = this.state.currentPassword;
    var newPassword         = this.state.newPassword;
    var newPasswordConfirm  = this.state.newPasswordConfirm;
    
    // TODO
  }
  
  render() {
    return (
      <form id="ChangePassword">
        <div className="content">

          <InputFloatingLabel
            name          = "currentPassword"
            type          = "password"
            floatingLabel = "Current Password "
            value         = {this.state.currentPassword}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
          />

          <InputFloatingLabel
            name          = "newPassword"
            type          = "password"
            floatingLabel = "New Password "
            value         = {this.state.newPassword}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
          />

          <InputFloatingLabel
            name          = "newPasswordConfirm"
            type          = "password"
            floatingLabel = "New Password (confirm)"
            value         = {this.state.newPasswordConfirm}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
          />

          <br/>
          <br/>

          <div className="row align-right">
            <ButtonFLat 
              label= "Change"
              onClick={this.login}
              backgroundColor={Colors.blueMedium1}
              style = {{}}
            />  

          </div>
        
        </div>
      </form>
    )
  }
  

};


//reactMixin(CreateAccount.prototype, ReactMeteorData);

export default ChangePassword;