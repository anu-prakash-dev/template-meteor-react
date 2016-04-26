import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';


class ButtonFlat extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div id={this.props.id} className={"button-mui "+this.props.className}>
        <RaisedButton 
          className={this.props.className}
          label={this.props.label}
          secondary={true} 
          backgroundColor={this.props.backgroundColor}
          onClick={this.props.onClick}
          style={this.props.style}
        />
      </div>
    )
  }

}

export default ButtonFlat;
