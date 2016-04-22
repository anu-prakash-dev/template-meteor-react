import React      from 'react';

import {Colors} from '/client/app/Theme';

import Knight from '/client/app/components/draganddrop/Knight';
import Square from '/client/app/components/draganddrop/Square';
 


class DragAndDrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount(){
  }
  
  render(){
    
    return(
      
      <div id="DragAndDrop">
        
        <Square>
          <Knight/>
        </Square>
        
      </div>
      
    )
  }
  
};



export default DragAndDrop;