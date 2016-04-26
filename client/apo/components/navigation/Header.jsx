import {Meteor}   from 'meteor/meteor';
import React      from 'react';
import reactMixin from 'react-mixin';
import { Link }   from 'react-router';

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
      
      <header id="Header">

        <h1>Meteor React app</h1>

        <i id="networkBadge" style={{marginRight:'10px', backgroundColor: networkBadgeColor}}></i>
        
        <Link className="button-nav" to="/account">
          <Avatar/>
        </Link>
        
      </header>
      
    )
  }
  
};


reactMixin(Header.prototype, ReactMeteorData);
export default Header;