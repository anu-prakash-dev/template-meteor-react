import React from 'react';

import {Colors} from '/client/app/Theme';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';



class CardFull extends React.Component {
  
  constructor(props){
    super(props);
    this.state={}
  }

  render() {
    return(
    
      <div id="CardFull">
        <Card>
          
          <CardHeader
            title={this.props.headerTitle}
            subtitle={this.props.headerSubTitle}
            avatar={this.props.headerAvatar}
          />
          
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src={this.props.mediaBackground} />
          </CardMedia>
          
          <CardTitle title="Card title" subtitle="Card subtitle" />
          
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          
          <CardActions>
            <FlatButton label="Like" />
            <FlatButton label="Share" />
          </CardActions>
          
        </Card>
      </div>
    
      
    );
  }
}


export default CardFull;