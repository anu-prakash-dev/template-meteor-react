import React from 'react';

import Card        from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader  from 'material-ui/Card/CardHeader';
import CardMedia   from 'material-ui/Card/CardMedia';
import CardTitle   from 'material-ui/Card/CardTitle';
import CardText    from 'material-ui/Card/CardText';
import FlatButton  from 'material-ui/FlatButton';

import {Colors} from '/client/app/Theme';



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