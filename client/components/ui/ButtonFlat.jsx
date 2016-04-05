import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';


class ButtonFlat extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <RaisedButton 
        label={this.props.label}
        secondary={true} 
        backgroundColor={this.props.backgroundColor}
        onClick={this.props.onClick}
      />
    )
  }

}

export default ButtonFlat;
