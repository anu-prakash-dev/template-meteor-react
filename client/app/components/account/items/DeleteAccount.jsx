import React    from 'react';

import {deleteAccount} from '/client/api/accounts';

import {Colors} from '/client/app/Theme';

import ButtonFLat         from '/client/app/components/ui/ButtonFlat'
import InputFloatingLabel from '/client/app/components/ui/InputFloatingLabel'



class DeleteAccount extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange    = this.handleChange.bind(this);
    this.controlPassword = this.controlPassword.bind(this);
    this.setErrorText    = this.setErrorText.bind(this);
    this.resetErrorText  = this.resetErrorText.bind(this);
    this.resetAllErrorTexts= this.resetAllErrorTexts.bind(this);
    this.resetInputs     = this.resetInputs.bind(this);
    this.toggleRoll      = this.toggleRoll.bind(this);
    this.handleClick     = this.handleClick.bind(this);
    this.deleteAccount   = this.deleteAccount.bind(this);
    this.onSuccess       = this.onSuccess.bind(this);
    this.onError         = this.onError.bind(this);
    this.state = {
      // input
      passwordConfirm:           '',
      passwordConfirmErrorText:  '',
      // ui
      timeout: 3500,
      isRollOpen: false,
    };
  }

  handleClick(){
    
    var userId = this.props.user._id;
    var userService = this.props.user.service;
    console.log()
    if(userService === 'intern'){
      this.controlPassword(()=>{
        this.deleteAccount(userId);
      });
    }
    else{
      this.deleteAccount(userId);
    }
    
  }
  
  deleteAccount(userId){
    
    deleteAccount(userId, (error)=> {
      if (error)
        this.onError(error);
      else
        this.onSuccess();
    });
    
  }

  onSuccess(){
    console.log('deleteAccount success');
  }
    
  onError(error){
    console.log(error);
    // todo
    this.props.openSnackbar("Ouups.. Something went wrong");
  }
  
  // Inputs
  
  handleChange(event){
    var inputName = event.target.name;
    var value     = event.target.value;
    
    var nextState  = {};
    nextState[inputName] = value;
    
    this.setState(nextState);
  }  
  
  controlPassword(callback){
    
    const passwordConfirm = this.state.passwordConfirm;
    // todo : checkPassword
    console.warn('TODO : control password before delete user');
    
    if( this.props.controlEmail != this.props.controlEmail ){
      console.log("password not valid");
      this.setErrorText("passwordConfirm", "Password not valid");
      return;
    }
    
    callback();
    
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
    this.resetErrorText('passwordConfirmpasswordConfirm');
  }
     
  resetInputs(){
    this.setState({
      passwordConfirm: ''
    })
  }
  
  toggleRoll(){
    this.props.toggleRoll(this);
  }
  
  // Render
  
  render() {
    let userService     = this.props.user.service;
    let isRollOpen      = this.state.isRollOpen;
    let toggleRollClass = isRollOpen?' is-visible':'';
    
    return (
      <div id="DeleteAccount">
         
        { userService == 'intern' ?
            <div className={"roll"+toggleRollClass}>

              <InputFloatingLabel
                name          = "passwordConfirm"
                type          = "password"
                floatingLabel = "Confirm your password"
                value         = {this.state.passwordConfirm}
                onChange      = {this.handleChange}
                style         = {{width: "100%", marginTop: "-10px"}}
                errorText     = {this.state.passwordConfirmErrorText}
                onFocus       = {this.resetErrorText.bind(this, 'passwordConfirm')}
                onEnterKeyDown= {this.deleteAccount}
              />

              <br/>

              <ButtonFLat 
                className = "btn-cancel"
                label     = "Cancel"
                onClick   = {this.toggleRoll}
                backgroundColor = {this.props.btnBackgroundColor}
                style     = {{width: '100%', marginBottom: '10px'}}
              />  
            </div>
          :
            ''
        }

        <ButtonFLat 
          className = "btn-action"
          label     = "Delete Account"
          backgroundColor = {isRollOpen?Colors.active:this.props.btnBackgroundColor}
          style           = {{width: '100%'}}
          onClick         = {!isRollOpen?this.toggleRoll:this.handleClick}
        /> 
      
      </div>
    )
  }
  

};


export default DeleteAccount;