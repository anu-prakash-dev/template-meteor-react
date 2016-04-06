import React from 'react';
import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'
import InputFloatingLabel      from '../../components/ui/InputFloatingLabel'


class CreateAccount extends React.Component{

  constructor(props) {
    super(props);
    //this.logout = this.logout.bind(this);
    this.handleChange  = this.handleChange.bind(this);
    //this.getMeteorData = this.getMeteorData.bind(this);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
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
  
  render() {
    return (
      <form id="CreateAccount">

        <InputFloatingLabel
          name          = "username"
          type          = "text"
          floatingLabel = "Username"
          placeholder   = "type your username.."
          value         = {this.state.username}
          onChange      = {this.handleChange}
          style         = {{width: "100%", marginTop: "-10px"}}
        />
        
        <InputFloatingLabel
          name          = "password"
          type          = "password"
          floatingLabel = "Password"
          placeholder   = "type your password.."
          value         = {this.state.password}
          onChange      = {this.handleChange}
          style         = {{width: "100%", marginTop: "-10px"}}
        />
        
        <InputFloatingLabel
          name          = "passwordConfirm"
          type          = "password"
          floatingLabel = "Confirm Password"
          placeholder   = "again.."
          value         = {this.state.passwordConfirm}
          onChange      = {this.handleChange}
          style         = {{width: "100%", marginTop: "-10px"}}
        />
        
        <br/>
        <br/>
        
        <div className="row align-right">
          <ButtonFLat 
            label= "Create Account"
            onClick={this.login}
            backgroundColor={Colors.blueMedium1}
            style = {{}}
          />  
          
        </div>
        

        
      </form>
    )
  }
  

};


//reactMixin(CreateAccount.prototype, ReactMeteorData);

export default CreateAccount;