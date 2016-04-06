import React from 'react';
import { Link, browserHistory } from 'react-router';



export const NavBar = () => (

  <nav>

    <Link className="button-nav" to="/account">Account</Link>
    
    <Link className="button-nav" to="/home">Home</Link>

    <Link className="button-nav" to="/tasks">Tasks</Link>

    <Link className="button-nav" to="/admin">Admin</Link>

    <a className="button-nav" href="https://github.com/MadeInMoon/template-meteor-react" target="_blank"> Code </a>
    
  </nav>

);
