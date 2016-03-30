import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Routes } from './Routes.jsx';
import { Header } from './../Components/Header.jsx';
import { Footer } from './../Components/Footer.jsx';

import Snackbar from 'material-ui/lib/snackbar';
import {Colors} from '../App/Theme';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.openSnackBar         = this.openSnackBar.bind(this);
    this.closeSnackBar        = this.closeSnackBar.bind(this);
    this.handleActionTouchTap = this.handleActionTouchTap.bind(this);
    this.state = {
      snackBarAutoHideDuration: 4000,
      message: 'Event added to your calendar',
      snackBar: false,
    };
  }

  openSnackBar(){
    console.log('open')
    this.setState({
      snackBar: true,
    });
  }
  
  closeSnackBar (){
    this.setState({
      snackBar: false,
    });
  }
  
  handleActionTouchTap() {
    this.closeSnackBar();
    alert('Event removed from your calendar.');
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
              {/*props.children : page receive from Routes.jsx*/}
              {React.cloneElement(this.props.children, {
                key: this.props.children.props.route.mykey,
                openSnackBar: this.openSnackBar
              })}
            </ReactCSSTransitionGroup>

          </div>

        </main>

        <Footer />
        
        <Snackbar
          open    = {this.state.snackBar}
          message = "Event added to your calendar!"
          action  = "Cancel"
          autoHideDuration= {this.state.snackBarAutoHideDuration}
          onActionTouchTap= {this.handleActionTouchTap}
          onRequestClose  = {this.closeSnackBar}
          bodyStyle       = {{backgroundColor: Colors.blueDarkTansparent}}
          style           = {{textColor: Colors.orange}}
        />

      </div>

    );
  }

};
export default App;
//==========================================================================


Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready

  ReactDOM.render(<Routes />, document.getElementById("App-wrapper"));

});
