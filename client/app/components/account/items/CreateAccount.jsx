import React from 'react';
import reactMixin from 'react-mixin';

import {Colors} from '/client/app/Theme';

import ButtonFLat         from '/client/app/components/ui/ButtonFlat'
import InputFloatingLabel from '/client/app/components/ui/InputFloatingLabel'



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
    this.toggleRoll     = this.toggleRoll.bind(this);
    this.openRoll       = this.openRoll.bind(this);
    this.closeRoll      = this.closeRoll.bind(this);
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
      isRollOpen: false,
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
          avatar:  '',
          name:    '',
          gender:  '',
          age:     '',
          city:    '',
          country: ''
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
      
      <div id="CreateAccount">
        
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
            onEnterKeyDown= {this.createAccount}
          />

          <InputFloatingLabel
            name          = "email"
            type          = "email"
            floatingLabel = "Email"
            value         = {this.state.email}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.emailErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'email')}
            onEnterKeyDown= {this.createAccount}
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
            onEnterKeyDown= {this.createAccount}
          />

          <InputFloatingLabel
            name          = "passwordConfirm"
            type          = "password"
            floatingLabel = "Confirm Password"
            value         = {this.state.passwordConfirm}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordConfirmErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'passwordConfirm')}
            onEnterKeyDown= {this.createAccount}
          />

          <br/>
          
          <ButtonFLat 
            className = "btn-cancel"
            label     = "Cancel"
            onClick   = {this.toggleRoll}
            backgroundColor = {Colors.blueMedium1}
            style     = {{width: '100%', marginBottom: '10px'}}
          />  
          
        </div>
        
        <ButtonFLat 
          className = "btn-action"
          label= "Create Account"
          backgroundColor = {isRollOpen?Colors.active:Colors.blueMedium1}
          style = {{width: '100%'}}
          onClick = {!isRollOpen?this.toggleRoll:this.createAccount}
        />

      </div>
    )
  }
  
};


//reactMixin(CreateAccount.prototype, ReactMeteorData);

export default CreateAccount;