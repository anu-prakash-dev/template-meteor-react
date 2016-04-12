import React   from 'react';
import {browserHistory}   from 'react-router';
import ResetForgotPassword from '../components/account/items/ResetForgotPassword.jsx';
 

class PageForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    // Redirect if user type route by hand, without resetPassword token (from mail link)
   return;
    let onResetPasswordLink = Session.get("onResetPasswordLink");
    if(!onResetPasswordLink) 
      browserHistory.push('/');
  }
  componentDidMount() {}
  
  render() {
    return (
      <div className="Page PageForgotPassword">

        <h1>Reset your Password</h1>
        
        <ResetForgotPassword/>
        
      </div>
    );
  }

};

export default PageForgotPassword;