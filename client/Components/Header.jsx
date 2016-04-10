import React    from 'react';
import { Link } from 'react-router';



import Avatar from './profile/Avatar';


export const Header = () => (

  <header id="Header">

    <h1>Meteor React app</h1>
    
    <Link className="button-nav" to="/account">
      <Avatar/>
    </Link>
  </header>

);
