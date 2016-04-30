import React     from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';


import {Colors}  from '/client/app/Theme';


class DialogSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      backgroundColor: Colors.primary
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.props.close}
        style={{color:Colors.textPrimary}}
      />,
      <FlatButton
        label="Ok"
        keyboardFocused={true}
        onTouchTap={this.props.close}
        style={{color:Colors.tertiary}}
      />,
    ];

    const backgroundColor = this.state.backgroundColor;
    
    return (

        <Dialog
          title="Dialog With Actions"
          actions = {actions}
          modal   = {true}
          open    = {this.props.isOpen}
          onRequestClose = {this.props.close}
          onTouchTap={this.props.close}
          titleStyle = {{backgroundColor: backgroundColor, color:Colors.textPrimary}}
          bodyStyle  = {{backgroundColor: backgroundColor, color:Colors.textSecondary}}
          actionsContainerStyle  = {{backgroundColor: backgroundColor}}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>

    );
  }
  
};

export default DialogSimple;
              