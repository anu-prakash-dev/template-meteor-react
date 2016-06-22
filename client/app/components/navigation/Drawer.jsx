import React from 'react';
import {Link} from 'react-router';

import DrawerMui    from 'material-ui/Drawer';
import MenuItem     from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider      from 'material-ui/Divider';

import IconAccount from 'material-ui/svg-icons/action/account-circle';
import IconHome    from 'material-ui/svg-icons/action/home';
import IconTasks   from 'material-ui/svg-icons/action/view-list';
import IconEye     from 'material-ui/svg-icons/image/remove-red-eye';
import IconCode    from 'material-ui/svg-icons/action/code';

import {Colors} from '/client/app/Theme';


class Drawer extends React.Component {
  
  constructor(props){  
    super(props);
    this.onRequestChange=this.onRequestChange.bind(this);
    this.state={}
  }
  
  onRequestChange(open){
    if(open)
      this.props.openDrawer();
    else
      this.props.closeDrawer();
  }
  
  render() {
    return(
      
      <DrawerMui
        docked = {false}
        width  = {220}
        swipeAreaWidth  = {35}
        open   = {this.props.isOpen}
        onRequestChange = {this.onRequestChange}
        overlayClassName="drawerOverlay"
        className="Drawer"
      >
        <div id="drawerTop">
          <p>Swipe me on mobile!</p>
        </div>
        
        <Link to="/account">
          <MenuItem 
            onClick={this.props.closeDrawer}
            style={{color: Colors.textPrimary}}
            leftIcon={<IconAccount/>}>
            Account
          </MenuItem>
        </Link>
        
        <Link to="/">
          <MenuItem 
            onClick={this.props.closeDrawer}
            style={{color: Colors.textPrimary}}
            leftIcon={<IconHome/>}>
            Home
          </MenuItem>
        </Link>
        
        <Link to="/formsalon">
          <MenuItem 
            onClick={this.props.closeDrawer}
            style={{color: Colors.textPrimary}}
            leftIcon={<IconTasks/>}>
            Nouveau salon
          </MenuItem>
        </Link>
        
        <Link to="/formemployee">
          <MenuItem 
            onClick={this.props.closeDrawer}
            style={{color: Colors.textPrimary}}
            leftIcon={<IconEye/>}>
            Nouvel employé
          </MenuItem>
        </Link>
        
        
      </DrawerMui>
    
      
    );
  }
}


export default Drawer;