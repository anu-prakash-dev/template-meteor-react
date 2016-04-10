import React   from 'react';
import Account from '../components/account/Account';
 

class PageAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="Page PageAccount">

        <h1>Account</h1>
        <p> Login, CreateAccount</p>
        <p> Logout, ChangeAvatar, ChangePassword</p>
        
        <Account openSnackBar={this.props.openSnackBar}/>
 
      </div>
    );
  }

};

export default PageAccount;