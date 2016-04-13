import React from 'react';
import { Link } from 'react-router';

import {Colors}   from '/client/app/Theme';

import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';

import ButtonIconAccount  from './ui/button-icons/ButtonIconAccount';
import ButtonIconHome     from './ui/button-icons/ButtonIconHome';
import ButtonIconTasks    from './ui/button-icons/ButtonIconTasks';
import ButtonIconShowcase from './ui/button-icons/ButtonIconShowcase';
import ButtonIconGithub   from './ui/button-icons/ButtonIconGithub';

const iconSize= '8px';

export const NavBar = () => (

  <nav className="flex-row-align">

    <Link to="/account">
      <ButtonIconAccount 
        color      = {Colors.blueMedium1}
        hoverColor = {Colors.active}
      />
    </Link>   
    
    <Link to="/home">
      <ButtonIconHome 
        color       = {Colors.blueMedium1}
        hoverColor  = {Colors.active}
        buttonStyle = {{fontSize: iconSize}}
        iconStyle   = {{fontSize: iconSize}}
      />
    </Link>  
    
    <Link to="/tasks">
      <ButtonIconTasks 
        color     = {Colors.blueMedium1}
        hoverColor= {Colors.active}
      />
    </Link>  
    
    <Link to="/showcase">
      <ButtonIconShowcase
        color     = {Colors.blueMedium1}
        hoverColor= {Colors.active}
      />  
    </Link>

    <a href="https://github.com/MadeInMoon/template-meteor-react" target="_blank">
      <ButtonIconGithub
        color      = {Colors.blueMedium1}
        hoverColor = {Colors.active}
      />  
    </a>
    
  </nav>

);
