import React from 'react';
import { Link } from 'react-router';

import {Colors}   from '/client/app/Theme';

import IconButton from 'material-ui/lib/icon-button';
import FontIcon   from 'material-ui/lib/font-icon';

import ButtonIconAccount  from '/client/app/components/ui/button_icons/ButtonIconAccount';
import ButtonIconHome     from '/client/app/components/ui/button_icons/ButtonIconHome';
import ButtonIconTasks    from '/client/app/components/ui/button_icons/ButtonIconTasks';
import ButtonIconShowcase from '/client/app/components/ui/button_icons/ButtonIconShowcase';
import ButtonIconGithub   from '/client/app/components/ui/button_icons/ButtonIconGithub';

export const NavBar = () => (

  <nav className="flex-row-align">

    <Link to="/">
      <ButtonIconHome 
        color       = {Colors.blueMedium1}
        hoverColor  = {Colors.active}
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
