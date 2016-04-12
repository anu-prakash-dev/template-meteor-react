import React from 'react';
import reactMixin from 'react-mixin';

import ButtonFLat         from '../ui/ButtonFlat'
import InputFloatingLabel from '../ui/InputFloatingLabel'

import {Colors} from '../../Theme';
import {controlPassword} from '../../../utilities/Utilities';

class ResetForgotPassword extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange    = this.handleChange.bind(this);
    this.controlInputs   = this.controlInputs.bind(this);
    this.setErrorText    = this.setErrorText.bind(this);
    this.resetErrorText  = this.resetErrorText.bind(this);
    this.resetAllErrorTexts= this.resetAllErrorTexts.bind(this);
    this.resetInputs     = this.resetInputs.bind(this);
    this.resetForgetPassword  = this.resetForgetPassword.bind(this);
    this.onSuccess       = this.onSuccess.bind(this);
    this.onError         = this.onError.bind(this);
    this.toggleRoll      = this.toggleRoll.bind(this);
    this.openRoll        = this.openRoll.bind(this);
    this.closeRoll       = this.closeRoll.bind(this);
    this.state = {
      password:           '',
      passwordConfirm:    '',
      passwordErrorText:            '',
      passwordConfirmErrorText:  '',
      timeout: 3500,
      result: '',
      isRollOpen: false,
    };
  }

  resetForgetPassword(){
    
    this.controlInputs( (password) => {
      
      const token = Session.get("onResetPasswordLinkToken");
      Accounts.resetPassword(
        token, 
        password, 
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
    
    this.resetInputs();
    this.resetAllErrorTexts();
    
    setTimeout(()=>{
      this.toggleRoll();
    }, 250);
    setTimeout(()=>{
      this.setState({ result: 'Password changed!' });
    }, 750);
    
    setTimeout(()=>{
      this.setState({ result: '' });
    }, this.state.timeout);
  }
    
  onError(error){
    
    console.log('Login Error : ' + error.reason + ', ' + error.error);
    
    if(error.reason === 'Incorrect password'){ 
      this.setErrorText('password', error.reason);
    }
    console.log('todo: error not handled')
  }
  
  // Inputs
  
  handleChange(event){
    var inputName = event.target.name;
    var value     = event.target.value;
    
    var nextState  = {};
    nextState[inputName] = value;
    
    this.setState(nextState);
  }  
  
  controlInputs(callback){
    
    password        = this.state.password;
    passwordConfirm = this.state.passwordConfirm;
    
    
    if( !controlPassword(password)){
      console.log("password not valide");
      this.setErrorText('password', "Invalid format (a-z, 0-9, with at least one digit and one uppercase letter) ");
      return;
    }
    if( password !== passwordConfirm){
      console.log("passwords don't match");
      this.setErrorText('password',        "Passwords don't match");
      this.setErrorText('passwordConfirm', "Passwords don't match");
      return;
    }
    
    
    callback(password);
    
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
  
  resetAllErrorTexts(){
    this.resetErrorText('password');
    this.resetErrorText('passwordConfirm');
  }
     
  resetInputs(){
    this.setState({
      password:'',
      passwordConfirm:''
    })
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
  
  // Render
  
  render() {
    
    let isRollOpen      = this.state.isRollOpen;
    let toggleRollClass = isRollOpen?' is-visible':'';
    
    return (
      <form id="ChangePassword">
         
        <div className={"roll"+toggleRollClass}>

          <InputFloatingLabel
            name          = "password"
            type          = "password"
            floatingLabel = "Password "
            value         = {this.state.password}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'password')}
            onEnterKeyDown= {this.resetForgetPassword}
          />


          <InputFloatingLabel
            name          = "passwordConfirm"
            type          = "password"
            floatingLabel = "Password (confirm)"
            value         = {this.state.passwordConfirm}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordConfirmErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'passwordConfirm')}
            onEnterKeyDown= {this.resetForgetPassword}
          />

          <br/>
          <br/>
        
        </div>
                
        <div id="buttonPasswordSubmit">
          <ButtonFLat 
            label     = "Change Password"
            backgroundColor = {Colors.blueMedium1}
            style           = {{width: '100%'}}
            onClick         = {this.resetForgetPassword}
          /> 
        </div>
              
        { this.state.result!='' ? 
            <p style={{display: "inline-block", fontSize: "12px", marginTop: "10px"}}>{this.state.result}</p>
            :''
        }
        
      </form>
    )
  }
  

};


//reactMixin(ResetForgotPassword.prototype, ReactMeteorData);
export default ResetForgotPassword;