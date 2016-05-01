import React from 'react';

import Card         from 'material-ui/Card';
import CardActions  from 'material-ui/Card/CardActions';
import CardHeader   from 'material-ui/Card/CardHeader';
import CardMedia    from 'material-ui/Card/CardMedia';
import CardTitle    from 'material-ui/Card/CardTitle';
import CardText     from 'material-ui/Card/CardText';

import FlatButton   from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {Colors} from '/client/app/Theme';

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
          swipeAreaWidth={60}
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