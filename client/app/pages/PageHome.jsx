import React from 'react'
import DragAndDrop from '/client/app/components/draganddrop/DragAndDrop'
import CardFull    from '/client/app/components/ui/cards/CardFull'

import LinkButtonFlat from '/client/app/components/ui/buttons/LinkButtonFlat'
import {Colors} from '/client/app/Theme'

import { PleaseLogin } from '/client/app/components/account/items/PleaseLogin';



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
            <PleaseLogin text="to access to this content"/>
        }
        

        
      </div>
    );
  } 
  
}

export default PageHome;
