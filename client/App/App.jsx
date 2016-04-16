import React      from 'react';
import reactMixin from 'react-mixin';
import {browserHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import   Header   from './components/Header';
import { Footer } from './components/Footer';
import { Colors } from './Theme';

import Snackbar from 'material-ui/lib/snackbar';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.openSnackBar         = this.openSnackBar.bind(this);
    this.closeSnackBar        = this.closeSnackBar.bind(this);
    this.handleSnackBarClick  = this.handleSnackBarClick.bind(this);
    this.state = {
      snackBarAutoHideDuration: 4000,
      snackBarMessage: '',
      snackBar: false,
    };
  }
  
  getMeteorData(){
    return{
      user: Meteor.user(),
      onResetPasswordLink: Session.get("onResetPasswordLink"),
      onEmailVerificationLink: Session.get("onEmailVerificationLink")
    }  
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
      user: Meteor.user(),
      isLogged: Meteor.userId() !== null,
      //isUserGoogle: Meteor.user().services.google !== null,
    };
  }

  componentWillMount(){
    let onResetPasswordLink= Session.get("onResetPasswordLink");
    if(onResetPasswordLink)
      browserHistory.push('/forgot-password');
    
    let onEmailVerificationLink = Session.get("onEmailVerificationLink");
    if(onEmailVerificationLink)
      this.openSnackBar('Your email has been verified!')
  }

  componentDidMount(){
    
//    // client
      Meteor.subscribe("Meteor.users.initials");
//
//    setTimeout(function(){
//      
//      const userId = Meteor.userId();
//      //const user   = Meteor.users.findOne(userId);
//      const user   = Meteor.user();
//      console.log(userId);
//      console.log(user);
//
//      console.log();
//
//    }, 1000);
  }

  
  render(){
    
    return(
      <div className="App" onClick={this.test}>

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
                openSnackBar: this.openSnackBar,
                user: this.data.user,
                isLogged: this.data.isLogged,

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
          bodyStyle       = {{backgroundColor: Colors.active}}
          style           = {{color: Colors.active}}
        />

      </div>

    );
  }

};


reactMixin(App.prototype, ReactMeteorData);
export default App;
