import React   from 'react';
import ResetForgotPassword from '../components/account/ResetForgotPassword.jsx';
 

class PageForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  
  render() {
    return (
      <div className="Page PageAccount">

        <h1>Reset your Password</h1>
        
        <ResetForgotPassword/>
        
      </div>
    );
  }

};

export default PageForgotPassword;