import {Meteor} from 'meteor/meteor';
import React    from 'react';
import {browserHistory} from 'react-router';

import ForgotPassword  from './ForgotPassword'
import CreateAccount   from './CreateAccount'

import {loginWithPassword} from '/client/api/accounts'

import {Colors}          from '/client/app/Theme';

import ButtonFLat           from '/client/app/components/ui/buttons/ButtonFlat'
import InputFloatingLabel   from '/client/app/components/ui/InputFloatingLabel'


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange   = this.handleChange.bind(this);
    this.handleKeyDown  = this.handleKeyDown.bind(this);
    this.controlInputs  = this.controlInputs.bind(this);
    this.login          = this.login.bind(this);
    this.onLoginError   = this.onLoginError.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.setErrorText   = this.setErrorText.bind(this);
    this.resetErrorText = this.resetErrorText.bind(this);
    this.toggleRoll = this.toggleRoll.bind(this);
    this.state = {
      username: '',
      password: '',
      usernameErrorText: '', 
      passwordErrorText: '',
      timeout: 3500
    };
  }
  
  // Login Methods
  
  login() {
    this.controlInputs( (username, password) => {
      loginWithPassword(
        username, 
        password, 
        (error) => {
          if(error)
            this.onLoginError(error)
          else
            this.onLoginSuccess()
        }
      );
    });
  }   
  
  onLoginSuccess(){
    console.log('Login success : ')
    return; // debug
    //this.props.openSnackBar('Welcome home dear '+this.getMeteorData().user.username);
    //browserHistory.push('/home');
  }
    
  onLoginError(error){

    console.log('Login Error : ' + error.reason + ', ' + error.error);
    
    if(error.reason === 'User not found'){ 
      this.setErrorText('username', error.reason);
    }
    else if(error.reason === 'Incorrect password'){ 
      this.setErrorText('password', error.reason);
    }
    else{
      // TODO : normally not needed, have to check
      this.setErrorText('outside', error.reason);
    }
    
  }

  // Inputs
  
  handleChange(event){
    
    var inputName = event.target.name;
    var value     = event.target.value;
    
    var nextState  = {};
    nextState[inputName] = value;
    nextState[inputName+'errorText'] = '';
    
    this.setState(nextState);
  }  
    
  handleKeyDown(event){
    if(event.keyCode !== 13) return;
    this.login();
  }  
  
  setErrorText(inputName, text){
    var nextState = {};
    nextState[inputName+'ErrorText'] = text;
    this.setState(nextState);
    
    this.resetErrorText(inputName, this.state.timeout);
  }
    
  resetErrorText(inputName, delay){
    var nextState = {};
    
    if(delay){
      setTimeout(()=>{
        nextState[inputName+'ErrorText'] = '';
        this.setState(nextState)
      }, delay);
    }
    else{
      nextState[inputName+'ErrorText'] = '';
      this.setState(nextState);
    }
  }
            
  controlInputs(callback) {
    
    var username = this.state.username;
    var password = this.state.password;
    
    // Control empty inputs
    if(username == '' || username == ' '){
      this.setErrorText("username", 'Empty field');
      return;
    }
    if(password == '' || password == ' '){
      this.setErrorText("password", 'Empty field');
      return;
    }
    if(username == '' || username == ' ' || password == '' || password == ' '){
      return
    }
    
    callback(username, password);
    
  }   
  
  // Roll
  
  toggleRoll() {
    this.props.toggleRoll(this);
  }
  
  render() {
    
    let isRollOpen      = this.state.isRollOpen;
    let toggleRollClass = isRollOpen?' is-visible':'';
    
    return (
      <div id="Login">
        
        <div className={"roll"+toggleRollClass}>

          <InputFloatingLabel
            name          = "username"
            type          = "text"
            floatingLabel = "Username"
            value         = {this.state.username}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.usernameErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'username')}
            onEnterKeyDown= {this.handleKeyDown}
          />

          <InputFloatingLabel
            name          = "password"
            type          = "password"
            floatingLabel = "Password"
            value         = {this.state.password}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'password')}
            onEnterKeyDown={this.handleKeyDown}
          />

          <br/>

          <ButtonFLat 
            className = "btn-cancel"
            label     = "Cancel"
            onClick   = {this.toggleRoll}
            backgroundColor={this.props.btnBackgroundColor}
            style = {{width:'100%'}}
          /> 
          
        </div>
            
        <ButtonFLat 
          className = "btn-action"
          label     = "Login"
          backgroundColor = {isRollOpen?Colors.active:this.props.btnBackgroundColor}
          style           = {{width: '100%', marginTop: '10px'}}
          onClick         = {!isRollOpen?this.toggleRoll:this.login}
        /> 

      </div>
    )
  }

};


export default Login;