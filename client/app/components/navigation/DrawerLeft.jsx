import React from 'react';

import {Colors} from '/client/app/Theme';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';



class DrawerLeft extends React.Component {
  
  constructor(props){
    super(props);
    this.onRequestChange=this.onRequestChange.bind(this);
    this.state={
      open: false
    }
  }
  
  onRequestChange(open){
    if(open)
      this.props.openDrawer();
    else
      this.props.closeDrawer();
  }
  
  render() {
    return(
      
      <LeftNav
        docked = {false}
        width  = {200}
        swipeAreaWidth  = {60}
        open   = {this.props.isOpen}
        onRequestChange = {this.onRequestChange}
        style={{backgroundColor: Colors.blueDark}}
        overlayClassName="drawerOverlay"
      >
        <MenuItem 
          onClick={this.props.closeDrawer}
          style={{color: Colors.greyLight}}>
          Menu Item
        </MenuItem>
        
        <MenuItem 
          onClick={this.props.closeDrawer}
          style={{color: Colors.greyLight}}>
          Menu Item2
        </MenuItem>
        
      </LeftNav>
    
      
    );
  }
}


export default DrawerLeft;