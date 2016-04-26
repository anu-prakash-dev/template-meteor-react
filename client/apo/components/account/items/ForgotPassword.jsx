import React from 'react';

import {forgotPassword} from '/client/api/accounts';

import {Colors} from '/client/app/Theme';

import ButtonFLat         from '/client/app/components/ui/ButtonFlat'
import InputFloatingLabel from '/client/app/components/ui/InputFloatingLabel'



class ForgotPassword extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange    = this.handleChange.bind(this);
    this.controlInputs   = this.controlInputs.bind(this);
    this.setErrorText    = this.setErrorText.bind(this);
    this.resetErrorText  = this.resetErrorText.bind(this);
    this.resetAllErrorTexts= this.resetAllErrorTexts.bind(this);
    this.resetInputs     = this.resetInputs.bind(this);
    this.forgotPassword  = this.forgotPassword.bind(this);
    this.onSuccess       = this.onSuccess.bind(this);
    this.onError         = this.onError.bind(this);
    this.toggleRoll      = this.toggleRoll.bind(this);
    this.state = {
      email:           '',
      emailErrorText:  '',
      timeout: 3500,
      isRollOpen: false,
    };
  }

  
  forgotPassword(){
    this.controlInputs((email)=>{
      forgotPassword(email, (error)=> {
        if (error)
          this.onError(error);
        else
          this.onSuccess();
      });
      
    });
  }

  onSuccess(){
    
    console.log('forgotPassword success ');
    
    
    this.resetInputs();
    this.resetAllErrorTexts();
    
    setTimeout(()=>{
      this.toggleRoll();
    }, 250);
    setTimeout(()=>{
      this.props.openSnackBar('An email has been sent to you!');
    }, 600);
  }
    
  onError(error){
    
    //console.log('forgotPassword Error : ' + error.reason + ', ' + error.error);
    
    if (error.message === 'User not found [403]')
      this.setErrorText("email", "Email not found");
    else 
      this.props.openSnackBar("We are sorry but something went wrong");
    
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
    
    const email = this.state.email;
    if( !this.props.controlEmail(email) ){
      console.log("email not valid");
      this.setErrorText("email", "Email format not valid");
      return;
    }
    
    callback(email);
    
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
    this.resetErrorText('email');
  }
     
  resetInputs(){
    this.setState({
      email: ''
    })
  }
   
  // Toggle Roll
  
  toggleRoll() {
    this.props.toggleRoll(this);
  }
  
  // Render
  
  render() {
    
    let isRollOpen      = this.state.isRollOpen;
    let toggleRollClass = isRollOpen?' is-visible':'';
    
    return (
      <div id="ForgotPassword">
         
        <div className={"roll"+toggleRollClass}>

          <InputFloatingLabel
            name          = "email"
            type          = "email"
            floatingLabel = "Email"
            value         = {this.state.email}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.emailErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'email')}
            onEnterKeyDown= {this.forgotPassword}
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
          label     = "Forgot Password?"
          backgroundColor = {isRollOpen?Colors.active:Colors.blueMedium1}
          style           = {{width: '100%'}}
          onClick         = {!isRollOpen?this.toggleRoll:this.forgotPassword}
        /> 
      
      </div>
    )
  }
  

};


export default ForgotPassword;