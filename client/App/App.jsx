import React from 'react';
import ReactDOM from 'react-dom';

import { Routes } from './Routes.jsx';

import { Header } from './../Components/Header.jsx';
import { Footer } from './../Components/Footer.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export const App = ( props ) => (
  
  <div className="App">

    <Header />

    <main className="app-main">

      <div className="app-content">

        {/* Where pages animate*/}
        <ReactCSSTransitionGroup
          component="div"
          transitionName="page"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {/*props.children : page receive from Routes.jsx*/}
          {React.cloneElement(props.children, {
            key: Math.random()
          })}
        </ReactCSSTransitionGroup>
        
      </div>

    </main>

    <Footer />

  </div>

);

//==========================================================================


Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready

  ReactDOM.render(<Routes />, document.getElementById("App-wrapper"));

});
