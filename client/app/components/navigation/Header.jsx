import {Meteor}   from 'meteor/meteor';
import React      from 'react';
import reactMixin from 'react-mixin';
import { Link }   from 'react-router';

import AppBar           from 'material-ui/AppBar';
import IconButton       from 'material-ui/IconButton';
import NavigationClose  from 'material-ui/svg-icons/navigation/menu';
import IconMenu         from 'material-ui/IconMenu';
import MoreVertIcon     from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem         from 'material-ui/MenuItem';

import Avatar   from '/client/app/components/account/items/Avatar';
import {Colors} from '/client/app/Theme';
 


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  getMeteorData(){
    return{
      connected: Meteor.status().connected
    }
  }
  
  render(){
    
    let networkBadgeColor = this.data.connected ? 'rgba(255, 255, 255, 0)': Colors.active;
    return(

      <AppBar
        id="Header"
        title={this.props.title}
        iconElementLeft={
          <IconButton onClick={this.props.openDrawer}><NavigationClose /></IconButton>
        }
        iconElementRight={
            <Link className="button-nav" to="/account">
              <Avatar/>
              <i id="networkBadge" style={{marginRight:'10px', backgroundColor: networkBadgeColor}}></i>
            </Link>

        }
        style={{backgroundColor: Colors.secondary}}
      />


    )
  }
  
};


reactMixin(Header.prototype, ReactMeteorData);
export default Header;