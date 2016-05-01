import React     from 'react';

import Dialog       from 'material-ui/Dialog';
import FlatButton   from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import {Colors}  from '/client/app/Theme';


class DialogSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      title: this.props.title || 'Dialog With Actions',
      titleStyle: {
        backgroundColor: Colors.primary, 
        color:Colors.textPrimary
      },
      bodyStyle: {
        backgroundColor: Colors.primary, 
        color:Colors.textSecondary
      },
      actionsContainerStyle: {
        backgroundColor: Colors.primary
      }
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
    
    
    return (

        <Dialog
          title   = {this.state.title||'Dialog With Actions'}
          actions = {actions}
          modal   = {true}
          open    = {this.props.isOpen}
          onRequestClose = {this.props.close}
          titleStyle = {this.state.titleStyle}
          bodyStyle  = {this.state.bodyStyle}
          actionsContainerStyle  = {this.state.actionContainerStyle}
        >
          "Arrest this man, he talks in maths, he buzzes like a fridge, he's like a detuned radio"
        </Dialog>

    );
  }
  
};

export default DialogSimple;
              