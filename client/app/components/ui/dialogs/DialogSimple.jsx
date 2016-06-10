import React     from 'react';

import Dialog         from 'material-ui/Dialog';
import FlatButton     from 'material-ui/FlatButton';
import RaisedButton   from '/client/app/components/ui/buttons/RaisedButton.jsx';


import {Colors}  from '/client/app/Theme';


class DialogSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state={
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
        onTouchTap={this.props.onRequestClose}
        style={{color:Colors.textPrimary}}
      />,
      <FlatButton
        label="Ok"
        keyboardFocused={true}
        onTouchTap={this.props.editThisItem}
        style={{color:Colors.tertiary}}
      />,
    ];

    return (

        <Dialog
          title           = {this.props.title}
          modal           = {this.props.modal}
          open            = {this.props.open}
          onRequestClose  = {this.props.onRequestClose}
          actions         = {actions}
          titleStyle      = {this.state.titleStyle}
          bodyStyle       = {this.state.bodyStyle}
          actionsContainerStyle  = {this.state.actionContainerStyle}/>
    );
  }
};

export default DialogSimple;
