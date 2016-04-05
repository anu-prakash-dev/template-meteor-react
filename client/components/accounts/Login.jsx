import React from 'react';
import reactMixin from 'react-mixin';
import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.login  = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getMeteorData = this.getMeteorData.bind(this);
    this.state = {};
  }
  
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  }
      
  login() {
    Meteor.login();
  }      
  
  logout() {
    Meteor.logout();
  }
     
  render() {
    return (
      <form id="Login">

        <input name="username" type="text"     value={this.props.usernameValue}/>
        <input name="password" type="password" value={this.props.passwordValue}/>

        
          <ButtonFLat 
            label= "Login"
            onClick={this.login}
            backgroundColor={Colors.blueMedium1}
          />  
        
          <ButtonFLat 
            label= "Logout"
            onClick={this.logout}
            backgroundColor={Colors.blueMedium1}
          />  
        

        
      </form>
    )
  }
  

};


reactMixin(Login.prototype, ReactMeteorData);

export default Login;