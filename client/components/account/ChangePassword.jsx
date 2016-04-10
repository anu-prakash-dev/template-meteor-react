import React from 'react';
import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';

import ButtonFLat         from '../../components/ui/ButtonFlat'
import InputFloatingLabel from '../../components/ui/InputFloatingLabel'



class ChangePassword extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange    = this.handleChange.bind(this);
    this.controlInputs   = this.controlInputs.bind(this);
    this.setErrorText    = this.setErrorText.bind(this);
    this.resetErrorText  = this.resetErrorText.bind(this);
    this.resetAllErrorTexts= this.resetAllErrorTexts.bind(this);
    this.resetInputs     = this.resetInputs.bind(this);
    this.changePassword  = this.changePassword.bind(this);
    this.onSuccess       = this.onSuccess.bind(this);
    this.onError         = this.onError.bind(this);
    this.toggleRoll      = this.toggleRoll.bind(this);
    this.openRoll        = this.openRoll.bind(this);
    this.closeRoll       = this.closeRoll.bind(this);
    this.state = {
      password:           '',
      passwordNew:        '',
      passwordNewConfirm: '',
      passwordErrorText:            '',
      passwordNewErrorText:         '',
      passwordNewConfirmErrorText:  '',
      timeout: 3500,
      result: '',
      isRollOpen: false,
    };
  }

  changePassword(){
    var currentPassword     = this.state.currentPassword;
    var newPassword         = this.state.newPassword;
    var newPasswordConfirm  = this.state.newPasswordConfirm;
    
    this.controlInputs( (password, passwordNew) => {
      
      Accounts.changePassword(
        password, 
        passwordNew, 
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
    
    password      = this.state.password;
    passwordNew   = this.state.passwordNew;
    passwordNewConfirm = this.state.passwordNewConfirm;
    
    // TODO : control username validity (caracters)
    if( password !== password ){
      console.log('Invalid password');
      this.setErrorText('password', "Invalid password");
      return;
    }   
    if( !this.props.controlPassword(passwordNew)){
      console.log("password not valide");
      this.setErrorText('passwordNew', "Invalid format (a-z, 0-9, with at least one digit and one uppercase letter) ");
      return;
    }
    if( passwordNew !== passwordNewConfirm){
      console.log("password not valide");
      this.setErrorText('passwordNew',        "Passwords don't match");
      this.setErrorText('passwordNewConfirm', "Passwords don't match");
      return;
    }
    
    callback(password, passwordNew);
    
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
    this.resetErrorText('passwordNew');
    this.resetErrorText('passwordNewConfirm');
  }
     
  resetInputs(){
    this.setState({
      password:'',
      passwordNew:'',
      passwordNewConfirm:''
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
            floatingLabel = "Current Password "
            value         = {this.state.password}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'password')}
            onEnterKeyDown= {this.changePassword}
          />

          <InputFloatingLabel
            name          = "passwordNew"
            type          = "password"
            floatingLabel = "New Password "
            value         = {this.state.passwordNew}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordNewErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'passwordNew')}
            onEnterKeyDown= {this.changePassword}
          />

          <InputFloatingLabel
            name          = "passwordNewConfirm"
            type          = "password"
            floatingLabel = "New Password (confirm)"
            value         = {this.state.passwordNewConfirm}
            onChange      = {this.handleChange}
            style         = {{width: "100%", marginTop: "-10px"}}
            errorText     = {this.state.passwordNewConfirmErrorText}
            onFocus       = {this.resetErrorText.bind(this, 'passwordNewConfirm')}
            onEnterKeyDown= {this.changePassword}
          />

          <br/>
          <br/>

          <div className="row align-right">
            

            <ButtonFLat 
              className = "buttonPasswordCancel"
              label     = "Cancel"
              onClick   = {this.toggleRoll}
              backgroundColor = {Colors.blueMedium1}
              style = {{width: '100%', marginBottom: '10px'}}
            />  

          </div>
        
        </div>
                
        <div id="buttonPasswordSubmit">
          <ButtonFLat 
            label     = "Change Password"
            backgroundColor = {isRollOpen?Colors.active:Colors.blueMedium1}
            style           = {{width: '100%'}}
            onClick         = {!isRollOpen?this.toggleRoll:this.changePassword}
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


//reactMixin(ChangePassword.prototype, ReactMeteorData);
export default ChangePassword;