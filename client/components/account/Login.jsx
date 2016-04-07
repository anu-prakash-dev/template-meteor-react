import React from 'react';
import reactMixin from 'react-mixin';
import {browserHistory} from 'react-router';

import {Colors} from '../../app/Theme';
import ButtonFLat           from '../../components/ui/ButtonFlat'
import LoaderLinear         from '../../components/ui/LoaderLinear'
import LoaderCircular       from '../../components/ui/LoaderCircular'
import LoaderBounce         from '../../components/ui/LoaderBounce'
import InputFloatingLabel   from '../../components/ui/InputFloatingLabel'


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
        <div className="content">

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
            
            {/*
            {this.state.isLoggingIn ?
              <LoaderCircular 
                style={{marginTop: '-8px'}} 
                color={Colors.active} />
              :""
            }
            */}

            {/*<LoaderBounce color={Colors.blueMedium1} style={{marginLeft: '20px'}}/>*/}
            
          </div>
        </div>
        { this.data.loggingIn ?
            <LoaderLinear 
                backgroundColor={Colors.blueDark} 
                color={Colors.blueMedium1}/>
            : ''
        }
      </form>
    )
  }
  

};


reactMixin(Login.prototype, ReactMeteorData);
export default Login;