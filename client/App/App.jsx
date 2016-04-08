import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';
import reactMixin from 'react-mixin';


import { Routes } from './Routes.jsx';
import { Header } from './../components/Header.jsx';
import { Footer } from './../components/Footer.jsx';

import Snackbar from 'material-ui/lib/snackbar';
import {Colors} from '../app/Theme';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.openSnackBar         = this.openSnackBar.bind(this);
    this.closeSnackBar        = this.closeSnackBar.bind(this);
    this.handleSnackBarClick  = this.handleSnackBarClick.bind(this);
    
    this.getMeteorData = this.getMeteorData.bind(this);
    
    this.state = {
      snackBarAutoHideDuration: 4000,
      snackBarMessage: '',
      snackBar: false,
    };
  }
  
  openSnackBar(text){
    if(typeof text != 'string'){text="Nothing special.."}
    this.setState({
      snackBarMessage: text,
      snackBar:        true,
    });
  }
  
  closeSnackBar (){
    this.setState({
      snackBar: false,
    });
  }
    
  handleSnackBarClick() {
    this.closeSnackBar();
    alert('Event removed from your calendar.');
  }

  getMeteorData() {
    return {
      isAuthenticated: Meteor.userId() !== null
    };
  }
    
  render(){
    return(
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
                {/*props.children : page received from Routes.jsx*/}
                {React.cloneElement(this.props.children, {
                  key: this.props.children.props.route.pageName,
                  openSnackBar: this.openSnackBar
                })}
              </ReactCSSTransitionGroup>

          </div>

        </main>

        <Footer />
        
        <Snackbar
          open    = {this.state.snackBar}
          message = {this.state.snackBarMessage}
          //action  = "Cancel"
          autoHideDuration= {this.state.snackBarAutoHideDuration}
          onActionTouchTap= {this.handleSnackBarClick}
          onRequestClose  = {this.closeSnackBar}
          bodyStyle       = {{backgroundColor: Colors.blueDarkTansparent}}
          style           = {{textColor: Colors.orange}}
        />

      </div>

    );
  }

};

//reactMixin(App.prototype, ReactMeteorData, Router.history);
reactMixin(App.prototype, ReactMeteorData);
export default App;


//==========================================================================


Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(<Routes />, document.getElementById("App-wrapper"));
});
