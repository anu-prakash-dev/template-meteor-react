import React from 'react';
import reactMixin from 'react-mixin';
import {browserHistory} from 'react-router';

import {Colors} from '../../Theme';
import ButtonFLat           from '../ui/ButtonFlat'
import LoaderLinear         from '../ui/LoaderLinear'
import LoaderCircular       from '../ui/LoaderCircular'
import LoaderBounce         from '../ui/LoaderBounce'
import InputFloatingLabel   from '../ui/InputFloatingLabel'

import ForgotPassword  from './ForgotPassword'
import CreateAccount   from './CreateAccount'


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange   = this.handleChange.bind(this);
    this.controlInputs  = this.controlInputs.bind(this);
    this.login          = this.login.bind(this);
    this.onLoginError   = this.onLoginError.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.setErrorText   = this.setErrorText.bind(this);
    this.resetErrorText = this.resetErrorText.bind(this);
    this.toggleRoll = this.toggleRoll.bind(this);
    this.openRoll = this.openRoll.bind(this);
    this.closeRoll = this.closeRoll.bind(this);
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
      
  login() {
    this.controlInputs( (username, password) => {
      Meteor.loginWithPassword(
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
  
  // Inputs
  
  handleChange(event){

    var inputName = event.target.name;
    var value     = event.target.value;
    
    var nextState  = {};
    nextState[inputName] = value;
    nextState[inputName+'errorText'] = '';
    
    this.setState(nextState);
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
    
  // Login Callbacks
  
  onLoginSuccess(){
    console.log('Login success : ')
    return; // debug
    browserHistory.push('/home');
    setTimeout(()=>{
      this.props.openSnackBar('Welcome home dear '+this.getMeteorData().user.username);
    },400);
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
  
   
  // Toggle Roll
  
  toggleRoll() {
    this.setState({ isRollOpen: !this.state.isRollOpen });
  }
    
  openRoll() {
    this.setState({ isRollOpen: true });
  }
  closeRoll() {
    this.setState({ isRollOpen: false});
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
            onEnterKeyDown= {this.login}
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
            onEnterKeyDown={this.login}
          />

          <br/>
          <br/>

            <ButtonFLat 
              className="buttonLoginCancel"
              label   = "Cancel"
              onClick = {this.toggleRoll}
              backgroundColor={Colors.blueMedium1}
              style = {{width:'100%', marginTop:'10px'}}
            /> 
          
        </div>
            
        <ButtonFLat 
          className = "buttonLogin"
          label     = "Login"
          backgroundColor = {isRollOpen?Colors.active:Colors.blueMedium1}
          style           = {{width: '100%', marginTop: '10px'}}
          onClick         = {!isRollOpen?this.toggleRoll:this.login}
        /> 
            {/*
            {this.state.isLoggingIn ?
              <LoaderCircular 
                style={{marginTop: '-8px'}} 
                color={Colors.active} />
              :""
            }
            */}

            {/*<LoaderBounce color={Colors.blueMedium1} style={{marginLeft: '20px'}}/>*/}
            
          
          <ForgotPassword
            controlEmail = {this.props.controlEmail}
          />  
          
         
          <CreateAccount
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


reactMixin(Login.prototype, ReactMeteorData);
export default Login;