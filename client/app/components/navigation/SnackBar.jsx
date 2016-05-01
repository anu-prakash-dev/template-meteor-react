import React    from 'react';
import Snackbar from 'material-ui/Snackbar';
import {Colors} from '/client/app/Theme';
 


class SnackBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      style: {
        color: this.props.color || Colors.secondary,
      },
      bodyStyle: {
        backgroundColor: this.props.backgroundColor || Colors.secondary,
      },
    };
  }

  render(){
    return(
      <Snackbar
        open    = {this.props.isOpen}
        message = {this.props.message}
        //action  = "Cancel"
        autoHideDuration= {this.props.autoHideDuration||this.state.autoHideDuration}
        onActionTouchTap= {this.props.onActionTouchTap}
        onRequestClose  = {this.props.onRequestClose}
        bodyStyle       = {this.state.bodyStyle}
        style           = {this.state.style}
      />

    );
  }
  
};


export default SnackBar;