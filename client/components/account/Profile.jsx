import React from 'react';
import {Colors} from '../../app/Theme';


class Profile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }
    
  render() {
    return (
      <form id="Profile">
          <div className="content">
        
            <p> {this.props.username} </p>
            { this.props.email ?
              <p> {this.props.email} &nbsp; {this.props.isEmailVerified?'(verified)':'(not verified)'} </p>
              :''
            }

          </div>
      </form>
    )
  }
  

};

export default Profile;