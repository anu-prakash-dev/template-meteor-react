import React, { Component, PropTypes } from 'react';

import {Colors} from '/client/app/Theme';
 



class Square extends Component {
  
  constructor(props){
    super(props);
    this.state={
      style:{
        backgroundColor:  this.props.black ? 'black' : 'white',
        color:            this.props.black ? 'white' : 'black',
        width:  '100%',
        height: '100%'
      }
    }
  }

  render() {
    return(
    
      
      <div style={this.state.style}>
        {this.props.children}
      </div>
    
      
    );
  }
}

//Square.propTypes = {
//  black: PropTypes.bool
//};

export default Square;