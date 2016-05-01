import React from 'react';
import {loginWithGoogle} from '/client/api/accounts';
import {Colors}     from '/client/app/Theme';
import ButtonFLat   from '/client/app/components/ui/buttons/ButtonFlat'



class LoginGoogle extends React.Component{

  constructor(props) {
    super(props);
    this.loginGoogle    = this.loginGoogle.bind(this);
    this.onLoginError   = this.onLoginError.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.state = {};
  }
 
  loginGoogle() {

    loginWithGoogle((error) => {
      if(error)
        this.onLoginError(error);
      else
        this.onLoginSuccess();
    });
    
  }   
  
  onLoginSuccess(){
    console.log('Google Login success');
  }
    
  onLoginError(error){
    if(error.errorType === 'Accounts.LoginCancelledError'){return}
    
    console.log('Google Login Error : ' + error);
    this.props.openSnackBar('Ouups.. Something went wrong');
  }

  render() {
    
    return (
      <div id="LoginGoogle">
        
        <ButtonFLat 
          className = "btn-action"
          label     = "Login Google"
          backgroundColor = {this.props.btnBackgroundColor}
          style           = {{width: '100%'}}
          onClick         = {this.loginGoogle}
        />

      </div>
    )
  }

};

export default LoginGoogle;