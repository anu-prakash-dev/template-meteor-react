import React from 'react';
import {Link} from 'react-router';

import {Colors} from '/client/app/Theme';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';

import IconAccount from 'material-ui/lib/svg-icons/action/account-circle';
import IconHome    from 'material-ui/lib/svg-icons/action/home';
import IconTasks   from 'material-ui/lib/svg-icons/action/view-list';
import IconEye     from 'material-ui/lib/svg-icons/image/remove-red-eye';
import IconCode    from 'material-ui/lib/svg-icons/action/code';


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
        
        <Link to="/tasks">
          <MenuItem 
            onClick={this.props.closeDrawer}
            style={{color: Colors.textPrimary}}
            leftIcon={<IconTasks/>}>
            Tasks
          </MenuItem>
        </Link>
        
        <Link to="/showcase">
          <MenuItem 
            onClick={this.props.closeDrawer}
            style={{color: Colors.textPrimary}}
            leftIcon={<IconEye/>}>
            Showcase
          </MenuItem>
        </Link>
        
        <Divider/>
        
        <a href="https://github.com/MadeInMoon/template-meteor-react" target="_blank">
          <MenuItem 
            onClick={this.props.closeDrawer}
            style={{color: Colors.textPrimary}}
            leftIcon={<IconCode/>}>
            Code
          </MenuItem>
        </a>
        
      </LeftNav>
    
      
    );
  }
}


export default DrawerLeft;