import React from 'react';

import {logout} from '/client/api/accounts';
import {Colors} from '/client/app/Theme';

import ButtonFlat from '/client/app/components/ui/buttons/ButtonFlat';



class Logout extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    logout();
  }
    
  render() {
    return (
      <ButtonFlat 
        className = "btn-action"
        id="Logout"
        label= "Logout"
        onClick={this.logout}
        backgroundColor={this.props.btnBackgroundColor}
        style = {this.props.style}
      />  
    )
  }
  

};


export default Logout;