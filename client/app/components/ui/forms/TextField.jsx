import React from 'react';
import TextFieldUi from 'material-ui/TextField';

import {cyan500, orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: cyan500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};


class TextField extends React.Component {

  constructor(props) {
    super(props);
    this.state={}
  }
 
  render() {
    return (
        <TextFieldUi  
              name={this.props.name}
              floatingLabelText={this.props.floatingLabelText}
              value={this.props.value}
              onChange={this.props.onChange}/>
    );
  }
};

export default TextField;