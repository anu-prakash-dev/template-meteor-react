import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import { App } from './App.jsx';
import { PageHome } from './../Pages/PageHome.jsx';
import PageTasks from './../Pages/PageTasks.jsx';
import { PageAdmin } from './../Pages/PageAdmin.jsx';
import { NotFoundPage } from './../Pages/NotFoundPage.jsx';


export const Routes = () => (

  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={PageHome} />
      <Route path="home" component={PageHome} />
      <Route path="tasks" component={PageTasks} />
      <Route path="admin" component={PageAdmin} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>

);