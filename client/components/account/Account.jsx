import React from 'react';

import Login          from '../account/Login';
import Logout         from '../account/Logout';
import CreateAccount  from '../account/CreateAccount';
import ChangePassword from '../account/ChangePassword';
 


class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
      
  render() {
    return (
  
      <div id="Account">

        <section>
          { Meteor.user() ?
            <Logout/>
            :
            <Login openSnackBar={this.props.openSnackBar}/>
          }
          { Meteor.user() ?
            <ChangePassword/>
            :
            <CreateAccount/>
          }
        </section>
        
      </div>

    );
  }

};


export default Account;