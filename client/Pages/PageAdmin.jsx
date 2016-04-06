import React from 'react';

import {Colors} from '../app/Theme';

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
    
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel commodo massa, eu adipiscing mi..    </p>

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

        </div>

      </div>
    );
  }

};


export default PageAdmin;