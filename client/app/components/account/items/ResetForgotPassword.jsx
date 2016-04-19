import React from 'react';

import {resetForgetPassword} from '/client/api/accounts';
import {controlPassword, redirect} from '/client/utilities/Utilities';

import {Colors} from '/client/app/Theme';

import ButtonFLat         from '/client/app/components/ui/ButtonFlat'
import InputFloatingLabel from '/client/app/components/ui/InputFloatingLabel'




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
    this.state = {
      password:                 '',
      passwordConfirm:          '',
      passwordErrorText:        '',
      passwordConfirmErrorText: '',
      timeout:    3500,
      isRollOpen: true,
    };
  }

  resetForgetPassword(){
    this.controlInputs( (password) => {
      
      const token = Session.get("onResetPasswordLinkToken");
      if (!token){
        this.props.openSnackBar('Your reset token is not valid anymore.');
        redirect('/');
        return;
      }
      
      resetForgetPassword(
        token, 
        password, 
        (error) => {
            if(error)
              this.onSuccess(error)
            else
              this.onSuccess()
        }
      );
      
    });
  }

  onSuccess(){
    
    console.log('Reset forgot password success !');
    
    this.resetInputs();
    this.resetAllErrorTexts();
    
    setTimeout(()=>{
      this.toggleRoll();
    }, 250);
    
    setTimeout(()=>{
      this.props.openSnackBar('Password successfully reset');
      redirect('/');
    }, 800);
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
    
    const password        = this.state.password;
    const passwordConfirm = this.state.passwordConfirm;
    
    
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
   
  // Roll
  
  toggleRoll() {
    this.setState({ isRollOpen: !this.state.isRollOpen });
  }
  
  // Render
  
  render() {
    
    let isRollOpen      = this.state.isRollOpen;
    let toggleRollClass = isRollOpen?' is-visible':'';
    
    return (
      <div id="ResetForgotPassword" className="account-box">
         
        <div className={"roll"+toggleRollClass}>

          <InputFloatingLabel
            name          = "password"
            type          = "password"
            floatingLabel = "New Password"
            value         = {this.state.password}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-20px"}}
            errorText     = {this.state.passwordErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'password')}
            onEnterKeyDown= {this.resetForgetPassword}
          />


          <InputFloatingLabel
            name          = "passwordConfirm"
            type          = "password"
            floatingLabel = "New Password (again)"
            value         = {this.state.passwordConfirm}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordConfirmErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'passwordConfirm')}
            onEnterKeyDown= {this.resetForgetPassword}
          />

          <br/>
        
        </div>

        <ButtonFLat 
          className = "btn-action"
          label     = "Reset Password"
          backgroundColor = {Colors.blueMedium1}
          style           = {{width: '100%'}}
          onClick         = {this.resetForgetPassword}
        />
        
      </div>
    )
  }
  
};


export default ResetForgotPassword;