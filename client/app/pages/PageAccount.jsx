import React   from 'react';
import Account from '../components/account/Account';
 

class PageAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  
  render() {
    
    return (
      <div className="Page PageAccount">

        <h1>Account</h1>
        <p> Login, ForgotPassword, CreateAccount</p>
        <p> Profile (ChangeAvatar, Logout, ChangePassword</p>
        
        <Account 
          openSnackBar = {this.props.openSnackBar}
          user         = {this.props.user}
        />
 
      </div>
    );
  }

};

export default PageAccount;