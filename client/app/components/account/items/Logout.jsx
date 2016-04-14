import React from 'react';

import {Colors} from '/client/app/Theme';
import ButtonFlat from '/client/app/components/ui/ButtonFlat';



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
      <ButtonFlat 
        className = "btn-action"
        id="Logout"
        label= "Logout"
        onClick={this.logout}
        backgroundColor={this.props.backgroundColor||Colors.active}
        style = {this.props.style}
      />  
    )
  }
  

};


export default Logout;