import {Meteor} from 'meteor/meteor';
import React from 'react';

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
    this.handleClick     = this.handleClick.bind(this);
    this.deleteAccount   = this.deleteAccount.bind(this);
    this.onSuccess       = this.onSuccess.bind(this);
    this.onError         = this.onError.bind(this);
    this.toggleRoll      = this.toggleRoll.bind(this);
    this.openRoll        = this.openRoll.bind(this);
    this.closeRoll       = this.closeRoll.bind(this);
    this.state = {
      // input
      passwordConfirm:           '',
      passwordConfirmErrorText:  '',
      // data
      userId: '',
      userService: '',
      // ui
      timeout: 3500,
      isRollOpen: false,
    };
  }

  componentDidMount(){
    const userService = Meteor.user().service;  // 'intern', 'google' or 'facebook'
    const userId      = Meteor.user()._id;
    this.setState({ 
      userService: userService,
      userId: userId
    })
  }

  handleClick(){
    
    if(this.state.userService === 'intern'){
      this.controlPassword(()=>{
        this.deleteAccount(this.state.userId);
      });
    }
    else{
      this.deleteAccount(this.state.userId);
    }
    
  }
  
  deleteAccount(userId){
    Meteor.users.remove({_id: userId}, (error)=> {
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
    this.setErrorText("passwordConfirm", "Ouups.. Something went wrong");
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
    let aaa = this.state.userService ;
    console.log(aaa);
    let isRollOpen      = this.state.isRollOpen;
    let toggleRollClass = isRollOpen?' is-visible':'';
    
    return (
      <div id="DeleteAccount">
         
        { aaa == 'intern' ?
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
                backgroundColor = {Colors.blueMedium1}
                style     = {{width: '100%', marginBottom: '10px'}}
              />  
            </div>
          :
            ''
        }

        <ButtonFLat 
          className = "btn-action"
          label     = "Delete Account"
          backgroundColor = {isRollOpen?Colors.active:Colors.blueMedium1}
          style           = {{width: '100%'}}
          onClick         = {!isRollOpen?this.toggleRoll:this.handleClick}
        /> 
      
      </div>
    )
  }
  

};


export default DeleteAccount;