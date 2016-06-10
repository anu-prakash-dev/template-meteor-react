import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import App                 from './App.jsx';
import PageHome            from './pages/PageHome.jsx';
import PageFormSalon       from './pages/PageFormSalon.jsx';
import PageFormEmployee    from './pages/PageFormEmployee.jsx';
import PageAccount         from './pages/PageAccount.jsx';
import PageForgotPassword  from './pages/PageForgotPassword.jsx';
import { NotFoundPage }    from './pages/NotFoundPage.jsx';


export const Routes = () => (

  <Router history={browserHistory} >
    <Route path="/"                 component={App}                 mykey="App">
      <IndexRoute                   component={PageHome}            mykey="Home"/>
      <Route path="account"         component={PageAccount}         pageName="Account"/>
      <Route path="formSalon"       component={PageFormSalon}       pageName="FormSalon"/>
      <Route path="formEmployee"    component={PageFormEmployee}    pageName="FormEmployee"/>
      <Route path="forgot-password" component={PageForgotPassword}  pageName="ForgotPassword"/>
      <Route path="*"               component={NotFoundPage}        pageName="NotFoundPage"/>
    </Route>
  </Router>

);