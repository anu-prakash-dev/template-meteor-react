import React from 'react';
//import reactMixin from 'react-mixin';

import {Colors} from '../../Theme';
import ButtonFLat from '../ui/ButtonFlat'


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
      <div id="Logout">
        <ButtonFLat 
          label= "Logout"
          onClick={this.logout}
          backgroundColor={this.props.backgroundColor||Colors.blueMedium2}
          style = {this.props.style}
        />  
      </div>
    )
  }
  

};


//reactMixin(Login.prototype, ReactMeteorData);

export default Logout;