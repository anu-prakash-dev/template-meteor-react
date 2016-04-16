import React from 'react';
import {Colors}     from '/client/app/Theme';
import {googleAuth} from '/client/api/authentification';
import ButtonFLat   from '/client/app/components/ui/ButtonFlat'



class LoginGoogle extends React.Component{

  constructor(props) {
    super(props);
    this.loginGoogle    = this.loginGoogle.bind(this);
    this.onLoginError   = this.onLoginError.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.state = {
      redirecUrl: googleAuth.getRedirectUrl()
    };
  }
 
  loginGoogle() {
    
    const options = {
      redirectUrl: this.state.redirecUrl,
      requestOfflineToken:false,
      loginStyle: 'popup',
      //loginHint:'userEmail@gmail.com',
      //loginUrlParameters:'',
    }

    Meteor.loginWithGoogle(
      options, 
      (error) => {
        if(error)
          this.onLoginError(error)
        else
          this.onLoginSuccess()
      }
    );
    
  }   
  
  onLoginSuccess(){
    console.log('Google Login success');
  }
    
  onLoginError(error){
    console.log('Google Login Error : ' + error);
    this.props.openSnackBar('Ouups.. Something went wrong');
  }

  render() {
    
    return (
      <div id="LoginGoogle">
        
        <ButtonFLat 
          className = "btn-action"
          label     = "Login Google"
          backgroundColor = {Colors.blueMedium1}
          style           = {{width: '100%'}}
          onClick         = {this.loginGoogle}
        /> 

      </div>
    )
  }

};

export default LoginGoogle;