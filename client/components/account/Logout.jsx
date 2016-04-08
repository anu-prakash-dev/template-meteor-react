import React from 'react';
//import reactMixin from 'react-mixin';

import {Colors} from '../../app/Theme';
import ButtonFLat from '../../components/ui/ButtonFlat'


class Logout extends React.Component{

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {};
  }

  logout() {
    Meteor.logout();
  }
    
  render() {
    return (
      <form id="Logout" className="align-center">
          <div className="content">
        
            <ButtonFLat 
              label= "Logout"
              onClick={this.logout}
              backgroundColor={Colors.blueMedium1}
              style = {{width: "50%", marginTop: '10px'}}
            />  
        
          </div>
      </form>
    )
  }
  

};


//reactMixin(Login.prototype, ReactMeteorData);

export default Logout;