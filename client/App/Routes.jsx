import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import App          from './App.jsx';
import PageHome     from './../pages/PageHome.jsx';
import PageTasks    from './../pages/PageTasks.jsx';
import PageShowcase from './../pages/PageShowcase.jsx';
import PageAccount  from './../pages/PageAccount.jsx';
import { NotFoundPage } from './../pages/NotFoundPage.jsx';


export const Routes = () => (

  <Router history={browserHistory} >
    <Route path="/" component={App}      mykey="App">
      <IndexRoute   component={PageAccount} mykey="PageHome"/>
      <Route path="account" component={PageAccount}  pageName="Account"/>
      <Route path="home"    component={PageHome}     pageName="Home"/>
      <Route path="tasks"   component={PageTasks}    pageName="Tasks"/>
      <Route path="admin"   component={PageShowcase} pageName="Showcase"/>
      <Route path="*"       component={NotFoundPage} pageName="NotFoundPage"/>
    </Route>
  </Router>

);