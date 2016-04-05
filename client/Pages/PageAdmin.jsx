import React from 'react';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import {Colors} from '../app/Theme';

import Login          from '../components/accounts/Login';
import ButtonFlat     from '../components/ui/ButtonFlat'
import LinkButtonFlat from '../components/ui/LinkButtonFlat'
 
 

class PageAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
  }
  
  render() {
    return (
  
      <div className="Page PageAdmin">

        <h1>Admin Page</h1>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel commodo massa, eu adipiscing mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ultricies dictum neque fringilla dolor.    </p>

        <div className="wrapper-buttons">

          <LinkButtonFlat 
            link="/home" 
            label="Home" 
            backgroundColor={Colors.blueMedium1}
          />
          
          <ButtonFlat 
            label="SnackBar" 
            backgroundColor={Colors.blueMedium1}
            onClick={this.props.openSnackBar}
          />

          
          <Login />

          
          

          
        </div>

      </div>
    );
  }

};


export default PageAdmin;