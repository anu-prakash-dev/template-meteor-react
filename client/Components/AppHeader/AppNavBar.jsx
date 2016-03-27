

import React from 'react';
import { Link, browserHistory } from 'react-router';
import AccountsUIWrapper from './../../Accounts/AccountsUIWrapper.jsx';

// AppNavBarr component - represents the Navigation Buttons of this App
export const AppNavBar = () => (

  <div>

    <Link to="/home"><button>Home</button></Link>

    <Link to="/tasks"><button>Tasks</button></Link>

    <Link to="/admin"><button>Admin</button></Link>

    <AccountsUIWrapper />

  </div>

);
