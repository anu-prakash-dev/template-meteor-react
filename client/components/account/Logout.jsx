import React from 'react';
//import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'


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