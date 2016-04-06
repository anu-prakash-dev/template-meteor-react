import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import App from './App.jsx';
import PageHome from './../pages/PageHome.jsx';
import PageTasks from './../pages/PageTasks.jsx';
import PageAdmin from './../pages/PageAdmin.jsx';
import PageAccount from './../pages/PageAccount.jsx';
import { NotFoundPage } from './../pages/NotFoundPage.jsx';


export const Routes = () => (

  <Router history={browserHistory} >
    <Route path="/" component={App}      mykey="App">
      <IndexRoute   component={PageAccount} mykey="PageHome"/>
      <Route path="account" component={PageAccount}  mykey="PageAccount"/>
      <Route path="home"    component={PageHome}     mykey="PageHome"/>
      <Route path="tasks"   component={PageTasks}    mykey="PageTasks"/>
      <Route path="admin"   component={PageAdmin}    mykey="PageAdmin"/>
      <Route path="*"       component={NotFoundPage} mykey="NotFoundPage"/>
    </Route>
  </Router>

);