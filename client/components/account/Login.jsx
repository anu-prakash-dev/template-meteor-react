import React from 'react';
import reactMixin from 'react-mixin';
import {browserHistory} from 'react-router';

import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'
import InputFloatingLabel from '../../components/ui/InputFloatingLabel'
import CircularProgress   from 'material-ui/lib/circular-progress';


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.login  = this.login.bind(this);
    this.onLoginError   = this.onLoginError.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.setErrorText  = this.setErrorText.bind(this);
    this.resetErrorText= this.resetErrorText.bind(this);
    this.handleChange  = this.handleChange.bind(this);
    this.state = {
      username: '',
      password: '',
      usernameErrorText: '', 
      passwordErrorText: '', 
      outsideErrorText: '', // TODO : maybe not needed anymore
      timeout: 3500, 
    };
  }
  
  getMeteorData() {
    return { 
      user: Meteor.user(),
      isLoginIn: Meteor.loggingIn()
    }
  }
      
  login() {
    
    var username = this.state.username;
    var password = this.state.password;
    
    // Control empty inputs
    if(username == '' || username == ' '){
      this.setErrorText("username", 'Empty field');
    }
    if(password == '' || password == ' '){
      this.setErrorText("password", 'Empty field');
    }
    if(username == '' || username == ' ' || password == '' || password == ' '){return}
    
    // Login
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
  
  //
  
  render() {
    return (
      <form id="Login">

        <InputFloatingLabel
          name          = "username"
          type          = "text"
          floatingLabel = "Username"
          placeholder   = "type your username.."
          value         = {this.state.username}
          onChange      = {this.handleChange}
          style         = {{width: "100%", marginTop: "-10px"}}
          errorText     = {this.state.usernameErrorText}
          onFocus       = {this.resetErrorText.bind(this, 'username')}
        />
        
        <InputFloatingLabel
          name          = "password"
          type          = "password"
          floatingLabel = "Password"
          placeholder   = "type your password.."
          value         = {this.state.password}
          onChange      = {this.handleChange}
          style         = {{width: "100%", marginTop: "-10px"}}
          errorText     = {this.state.passwordErrorText}
          onFocus       = {this.resetErrorText.bind(this, 'password')}
        />
        
        <br/>
        <br/>
        
        <div className="flex">
          <ButtonFLat 
            label   = "Login"
            onClick = {this.login}
            backgroundColor={Colors.blueMedium1}
            style = {{}}
          />  
          
          {this.state.outsideErrorText!='' ?
            <p>{this.state.outsideErrorText}</p>
            :
            ""
          }
          
          {Meteor.loggingIn()?
            <CircularProgress style={{marginTop: '-8px'}} color={Colors.active} size={0.45} />
            :""
          }
          
        </div>
        

        
      </form>
    )
  }
  

};


// reactMixin(Login.prototype, ReactMeteorData);

export default Login;