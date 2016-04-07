import React from 'react';
import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'
import InputFloatingLabel      from '../../components/ui/InputFloatingLabel'


class CreateAccount extends React.Component{

  constructor(props) {
    super(props);
    //this.logout = this.logout.bind(this);
    this.handleChange   = this.handleChange.bind(this);
    this.controlInputs  = this.controlInputs.bind(this);
    this.setErrorText   = this.setErrorText.bind(this);
    this.resetErrorText = this.resetErrorText.bind(this);
    this.createAccount  = this.createAccount.bind(this);
    this.onSuccess      = this.onSuccess.bind(this);
    this.onError        = this.onError.bind(this);
    //this.getMeteorData = this.getMeteorData.bind(this);
    this.state = {
      username:         '',
      email:         '',
      password:         '',
      passwordConfirm:  '',
      usernameErrorText:        '',
      emailErrorText:        '',
      passwordErrorText:        '',
      passwordConfirmErrorText: '',
      outsideErrorText: '', // TODO : maybe not needed anymore
      timeout: 3500, 
    };
  }
  
  // Create Account
  
  createAccount(){
    this.controlInputs( (username, email, password)=>{
      // if control is ok
      
      const options={
        username: username,
        email:    email,
        password: password,
        profile: {
          name:   '',
          gender: '',
          age:    '',
          city:   '',
          country:''
        },
      }
      
      Accounts.createUser(
        options, 
        (error) => {
          if(error)
            this.onError(error)
          else
            this.onSuccess()
        }
      );
    });
  }   

  onSuccess(){
    console.log('Login success ');
  }
    
  onError(error){
    
    console.log('Login Error : ' + error.reason + ', ' + error.error);
    
    if(error.reason === 'Username already exists.'){ 
      this.setErrorText('username', error.reason);
    }
    if(error.reason === 'Email already exists.'){ 
      this.setErrorText('email', error.reason);
    }
    
  }
  
  // Inputs
     
  controlInputs(callback){
    
    username = this.state.username;
    email    = this.state.email;
    password = this.state.password;
    passwordConfirm = this.state.passwordConfirm;
    
    // TODO : control username validity (caracters)
    if( !this.props.controlUsername(username) ){
      console.log('username not valide');
      this.setErrorText('username', "Invalid format (a-z, 0-9, with at least two caracters, and between two and 14 caracters )");
      return;
    }    
    if( !this.props.controlEmail(email) ){
      console.log('email not valide');
      this.setErrorText('email', "Invalide format");
      return;
    }
    // TODO : control password validity (caracters)
    if( password.length<6 ){
      console.log("password.length<6");
      this.setErrorText('password', "6 caracters minimum ");
      return;
    }
    if( !this.props.controlPassword(password) ){
      console.log("password not valide");
      this.setErrorText('password', "Invalid format (a-z, 0-9, with at least one digit and one uppercase letter) ");
      return;
    }
    if( passwordConfirm.length<6 ){
      console.log("passwordConfirm.length<6");
      this.setErrorText('passwordConfirm', "6 caracters minimum ");
      return;
    }
    if (password !== passwordConfirm ){;
      console.log("password !== passwordConfirm");
      this.setErrorText('password',        "Passwords don't match");
      this.setErrorText('passwordConfirm', "Passwords don't match");
      return;
    }
    
    callback(username, email, password);
    
  }
  
  
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
   
  render() {
    return (
      <form id="CreateAccount">
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
            name          = "email"
            type          = "email"
            floatingLabel = "Email"
            placeholder   = "type your email.."
            value         = {this.state.email}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.emailErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'email')}
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

          <InputFloatingLabel
            name          = "passwordConfirm"
            type          = "password"
            floatingLabel = "Confirm Password"
            placeholder   = "again.."
            value         = {this.state.passwordConfirm}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordConfirmErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'passwordConfirm')}
          />

          <br/>
          <br/>

          <div className="row align-right">
            <ButtonFLat 
              label= "Create Account"
              onClick={this.createAccount}
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

export default CreateAccount;