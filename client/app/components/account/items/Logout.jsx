import React from 'react';
//import reactMixin from 'react-mixin';

import {Colors} from '/client/app/Theme';
import ButtonFLat from '/client/app/components/ui/ButtonFlat'



class Logout extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    Meteor.logout();
  }
    
  render() {
    return (
      <ButtonFLat 
        className = "btn-action"
        id="Logout"
        label= "Logout"
        onClick={this.logout}
        backgroundColor={this.props.backgroundColor||Colors.blueMedium2}
        style = {this.props.style}
      />  
    )
  }
  

};


//reactMixin(Login.prototype, ReactMeteorData);

export default Logout;