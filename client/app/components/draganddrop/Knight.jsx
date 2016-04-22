import React      from 'react';

import {Colors} from '/client/app/Theme';
 


class Knight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount(){
  }
  
  render(){
    
    return(
      <span id="DragAndDrop">♘</span>
    )
  }
  
};


export default Knight;