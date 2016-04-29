import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';


class LinkButtonFlat extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(

      <Link className="button-material-ui" to={this.props.link}>
        <RaisedButton 
          label={this.props.label}
          secondary={true} 
          backgroundColor={this.props.backgroundColor}
          style={this.props.style}
        />
      </Link>

    )
  }

}

export default LinkButtonFlat;
