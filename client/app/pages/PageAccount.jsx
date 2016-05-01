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
      
        <Account 
          openSnackBar = {this.props.openSnackBar}
          user         = {this.props.user}
          openDialogContainer = {this.props.openDialogContainer}
        />
        
      </div>
    );
  }

};

export default PageAccount;