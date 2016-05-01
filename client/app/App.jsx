import React      from 'react';
import reactMixin from 'react-mixin';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import   Header   from '/client/app/components/navigation/Header';
import   Drawer   from '/client/app/components/navigation/Drawer';
import   Snackbar from '/client/app/components/navigation/SnackBar';

import DialogSimple from '/client/app/components/ui/dialogs/DialogSimple';
import { Colors }   from '/client/app/Theme';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.openSnackBar         = this.openSnackBar.bind(this);
    this.closeSnackBar        = this.closeSnackBar.bind(this);
    this.handleSnackBarClick  = this.handleSnackBarClick.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openDrawer   = this.openDrawer.bind(this);
    this.closeDrawer  = this.closeDrawer.bind(this);
    this.openDialog   = this.openDialog.bind(this);
    this.closeDialog  = this.closeDialog.bind(this);
    this.state = {
      snackBarAutoHideDuration: 4000,
      snackBarMessage:          '',
      isSnackBarOpen:     false,
      isDrawerOpen: false,
      isDialogOpen: false
    };
  }
  
  
  // Data
  
  getMeteorData(){
    return{
      user: Meteor.user(),
      onResetPasswordLink: Session.get("onResetPasswordLink"),
      onEmailVerificationLink: Session.get("onEmailVerificationLink"),
      isLogged: Meteor.userId() !== null,
    }  
  }

  
  // SnackBar methods
  
  openSnackBar(text){
    if(typeof text != 'string'){text="Nothing special.."}
    this.setState({
      snackBarMessage: text,
      isSnackBarOpen:        true,
    });
  }
  
  closeSnackBar (){
    this.setState({
      isSnackBarOpen: false,
    });
  }
    
  handleSnackBarClick() {
    this.closeSnackBar();
    alert('Event removed from your calendar.');
  }

  
  // Drawer methods
  
  toggleDrawer(){
    this.setState({isDrawerOpen: !this.state.open});
  }
  
  openDrawer(){
    this.setState({isDrawerOpen: true});
  }
  
  closeDrawer(){
    this.setState({isDrawerOpen: false});
  }
  
  attachCloseDrawerToOverlay(){
    // TODO : find a cleaner way to close drawer on overlay click
    const overlay = document.getElementsByClassName("drawerOverlay")[0];
    overlay.addEventListener('click', this.closeDrawer)
  }
  
  // Dialogs methods

  openDialog() {
    this.setState({isDialogOpen: true});
  }

  closeDialog() {
    this.setState({isDialogOpen: false});
  }
  
  // Component methods
  
  componentWillMount(){
    let onResetPasswordLink= Session.get("onResetPasswordLink");
    if(onResetPasswordLink)
      browserHistory.push('/forgot-password');
    
    let onEmailVerificationLink = Session.get("onEmailVerificationLink");
    if(onEmailVerificationLink)
      this.openSnackBar('Your email has been verified!')
  }
  
  componentDidMount(){
    this.attachCloseDrawerToOverlay();
    
    
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
      <div className="App">

        
        <Header 
          openDrawer = {this.openDrawer}
        />

        
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
                key:          this.props.children.props.route.pageName,
                user:         this.data.user,
                isLogged:     this.data.isLogged,
                openSnackBar: this.openSnackBar,
                toggleDrawer: this.toggleDrawer,
                openDialogSimple: this.openDialog,
              })}
            </ReactCSSTransitionGroup>

          </div>

        </main>

        
        <Drawer 
          isOpen = {this.state.isDrawerOpen}
          toggleDrawer = {this.toggleDrawer}
          openDrawer   = {this.openDrawer}
          closeDrawer  = {this.closeDrawer}
        />
      
        <Snackbar
          isOpen  = {this.state.isSnackBarOpen}
          message = {this.state.snackBarMessage}
          //action  = "Cancel"
          onActionTouchTap= {this.handleSnackBarClick}
          onRequestClose  = {this.closeSnackBar}
          backgroundColor = {Colors.secondary}
          color           = {Colors.active}
        />
        
        <DialogSimple 
          isOpen = {this.state.isDialogOpen} 
          close  = {this.closeDialog}
          title  = "Karma Dialog"
        />
        

      </div>

    );
  }

};


reactMixin(App.prototype, ReactMeteorData);
export default App;
