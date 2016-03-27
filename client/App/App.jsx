import React from 'react';
import ReactDOM from 'react-dom';

import { Routes } from './Routes.jsx';

import { AppHeader } from './../Components/AppHeader/AppHeader.jsx';
import { AppFooter } from './../Components/AppFooter/AppFooter.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// App component - represents the whole app
export const App = ( props ) => (

  <div className="App">

    <AppHeader />

    <main className="app-main">

      <div className="app-content">

        <ReactCSSTransitionGroup
          component="div"
          transitionName="page"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {React.cloneElement(props.children, {
            key: Math.random()
          })}
        </ReactCSSTransitionGroup>
        
        


      </div>

    </main>

    <AppFooter />

  </div>

);

//==========================================================================
Meteor.startup(function () {

  // Use Meteor.startup to render the component after the page is ready

  ReactDOM.render(<Routes />, document.getElementById("App-wrapper"));

});
