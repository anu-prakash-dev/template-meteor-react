import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';


class ButtonFlat extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <RaisedButton 
        className={this.props.className}
        label={this.props.label}
        secondary={true} 
        backgroundColor={this.props.backgroundColor}
        onClick={this.props.onClick}
        style={this.props.style}
      />
    )
  }

}

export default ButtonFlat;
