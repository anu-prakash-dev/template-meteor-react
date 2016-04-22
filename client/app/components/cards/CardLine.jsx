import React from 'react';

import {Colors} from '/client/app/Theme';
 


import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';


class CardLine extends React.Component {
  
  constructor(props){
    super(props);
    this.handleToggle=this.handleToggle.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.state={open: false}
  }
  
  handleToggle(){
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.setState({open: false});
  }


  render() {
    return(
    
<div>
        <RaisedButton
          label="Open LeftNav"
          onClick={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          swipeAreaWidth={100}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
</div>
    
      
    );
  }
}


export default CardLine;