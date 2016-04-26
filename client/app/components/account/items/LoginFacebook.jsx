import React from 'react';
import {loginWithFacebook} from '/client/api/accounts';
import {Colors}     from '/client/app/Theme';
import ButtonFLat   from '/client/app/components/ui/ButtonFlat'



class LoginFacebook extends React.Component{

  constructor(props) {
    super(props);
    this.loginFacebook    = this.loginFacebook.bind(this);
    this.onLoginError   = this.onLoginError.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.state = {};
  }
 
  loginFacebook() {

    loginWithFacebook((error) => {
      if(error)
        this.onLoginError(error);
      else
        this.onLoginSuccess();
    });
    
  }   
  
  onLoginSuccess(){
    console.log('Facebook Login success');
  }
    
  onLoginError(error){
    console.log('Facebook Login Error : ' + error);
    this.props.openSnackBar('Ouups.. Something went wrong');
  }

  render() {
    
    return (
      <div id="LoginFacebook">
        
        <ButtonFLat 
          className = "btn-action"
          label     = "Login facebook"
          backgroundColor = {Colors.blueMedium1}
          style           = {{width: '100%'}}
          onClick         = {this.loginFacebook}
        /> 

      </div>
    )
  }

};


export default LoginFacebook;