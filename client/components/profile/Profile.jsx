import React      from 'react';
import reactMixin from 'react-mixin';

import Logout         from '../account/Logout';
import ChangeAvatar   from './ChangeAvatar';
import ChangePassword from '../account/ChangePassword';



class Profile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }  
  
  getMeteorData() {
    return { 
      user: Meteor.user(),
      //loggingIn: Meteor.loggingIn(),
      //isAuthenticated: Meteor.userId() !== null
    }
  }

  render() {
    return (
      <div id="Profile">
          <div className="content">
        
            <div className="flex">
              
              <ChangeAvatar/>
              
              <div>
                <p id="textUsername" onClick={this.updateUserAvatar}> {this.props.username} </p>

                { this.props.email ?
                  <p id="textEmail"> {this.props.email} </p>
                  :''
                }
                { this.props.isEmailVerified ?
                  <p id="textEmailStatut"> (verified) </p>
                  :
                  <p id="textEmailStatut"> (not verified) </p>
                }
                
              </div>
            </div>


            <Logout/>
            
            <ChangePassword controlPassword = {this.props.controlPassword} />
            
          </div>
      </div>
    )
  }
  

};

//reactMixin(Profile.prototype, ReactMeteorData);
export default Profile;