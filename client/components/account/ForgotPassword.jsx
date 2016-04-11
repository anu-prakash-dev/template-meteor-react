import React from 'react';
import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';

import ButtonFLat         from '../../components/ui/ButtonFlat'
import InputFloatingLabel from '../../components/ui/InputFloatingLabel'



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
    this.openRoll        = this.openRoll.bind(this);
    this.closeRoll       = this.closeRoll.bind(this);
    this.state = {
      email:           '',
      emailErrorText:  '',
      timeout: 3500,
      result: '',
      isRollOpen: false,
    };
  }

  
  forgotPassword(){
    
    this.controlInputs((email)=>{

      Accounts.forgotPassword({email: email}, (error)=> {
        if (error)
          this.onError(error)
        else
          this.onSuccess()
      });
      
    });
  }

  onSuccess(){
    
    console.log('forgotPassword success ');
    
//    this.resetInputs();
//    this.resetAllErrorTexts();
//    
//    setTimeout(()=>{
//      this.toggleRoll();
//    }, 250);
//    setTimeout(()=>{
//      this.setState({ result: 'Password changed!' });
//    }, 750);
//    
//    setTimeout(()=>{
//      this.setState({ result: '' });
//    }, this.state.timeout);
  }
    
  onError(error){
    
    //console.log('forgotPassword Error : ' + error.reason + ', ' + error.error);
    
    if (error.message === 'User not found [403]')
      this.setErrorText("email", "Email not found");
    else 
      this.setErrorText("email", "We are sorry but something went wrong");
    
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
    
    email = this.state.email;
    console.log(email)
    console.log( !this.props.controlEmail(email) );
    if( !this.props.controlEmail(email)){
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
          <br/>

          <ButtonFLat 
            className = "buttonPasswordCancel"
            label     = "Cancel"
            onClick   = {this.toggleRoll}
            backgroundColor = {Colors.blueMedium1}
            style     = {{width: '100%', marginBottom: '10px'}}
          />  

        
        </div>
                
        <div id="buttonForgotSubmit">
          <ButtonFLat 
            label     = "Forgot Password?"
            backgroundColor = {isRollOpen?Colors.active:Colors.blueMedium1}
            style           = {{width: '100%'}}
            onClick         = {!isRollOpen?this.toggleRoll:this.forgotPassword}
          /> 
        </div>
              
        { this.state.result!='' ? 
            <p style={{display: "inline-block", fontSize: "12px", marginTop: "10px"}}>{this.state.result}</p>
            :''
        }
                
      </div>
    )
  }
  

};


//reactMixin(ForgotPassword.prototype, ReactMeteorData);
export default ForgotPassword;