import React from 'react';
import DragAndDrop from '/client/app/components/draganddrop/DragAndDrop'
import CardFull    from '/client/app/components/ui/cards/CardFull'

import {Colors} from '/client/app/Theme'

class PageHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(

      <div className="Page PageHome">

        {/*
          <DragAndDrop />
        */}
        
        { this.props.user ?
            <CardFull 
              headerTitle    = {this.props.user.username+"'s"}
              headerSubTitle = "crazy diving session"
              headerAvatar   = {this.props.user.profile.avatar}
              mediaBackground= "/medias/backgrounds/background-water.png"
              user = {this.props.user}/> 
          : 
            '' 
        }
        
      </div>
    );
  } 
  
}

export default PageHome;