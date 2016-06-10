import React from 'react';
import RaisedButtonUi from 'material-ui/RaisedButton';

class RaisedButton extends React.Component{  

  constructor(props){
      super(props);
  }
  
  render() {
    return (
      <RaisedButtonUi 
        label={this.props.label}
        onClick={this.props.onClick}>
      </RaisedButtonUi>
    );
  }
    
};


export default RaisedButton;