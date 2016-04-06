import React from 'react';
import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'
import InputFloatingLabel from '../../components/ui/InputFloatingLabel'
import CircularProgress   from 'material-ui/lib/circular-progress';


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.login  = this.login.bind(this);
    this.handleError   = this.handleError.bind(this);
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
        // if ok : no arg in the callback. If error, error as an arg
        if(error){
          this.handleError(error);
        }
        else{
          console.log('Login success : ')
          console.log( Meteor.user() )
        }
      }
    );
  }      
  
  handleChange(event){

    var inputName = event.target.name;
    var value     = event.target.value;
    
    var nextState  = {};
    nextState[inputName] = value;
    nextState[inputName+'errorText'] = '';
    
    this.setState(nextState);
  }  
  
  handleError(error){

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
  
  setErrorText(inputName, text){
    var nextState = {};
    nextState[inputName+'ErrorText'] = text;
    this.setState(nextState);
    
    this.resetErrorText(inputName, this.state.timeout);
  }
    
  resetErrorText(inputName, delay){
    console.log('ok');
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