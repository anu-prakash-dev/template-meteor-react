import React from 'react';
import {Link} from 'react-router';


import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton   from 'material-ui/lib/icon-button';

import {Colors} from '../App/Theme';


class PageAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
  
      <div className="Page PageAdmin">

        <h1>Admin Page</h1>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel commodo massa, eu adipiscing mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ultricies dictum neque fringilla dolor.    </p>

        <div className="wrapper-buttons">

          <Link className="button-material-ui" to="/home">
            <RaisedButton label="Home" secondary={true} backgroundColor={Colors.blueMedium1}/>
          </Link>

          <RaisedButton 
            label="SnackBar" 
            secondary={true} 
            backgroundColor={Colors.blueMedium1}
            onClick={this.props.openSnackBar}
          />

        </div>

      </div>
    );
  }

};


export default PageAdmin;