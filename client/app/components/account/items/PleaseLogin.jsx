import React from 'react';
import { Link } from 'react-router';

import Card        from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader  from 'material-ui/Card/CardHeader';
import CardMedia   from 'material-ui/Card/CardMedia';
import CardTitle   from 'material-ui/Card/CardTitle';
import CardText    from 'material-ui/Card/CardText';
import FlatButton  from 'material-ui/FlatButton';

import {Colors} from '/client/app/Theme';



export const PleaseLogin = (props) => (
  
  <div id="PleaseLogin">
    <Card style={{
            paddingLeft:'0.5em'
          }}
    >

      <CardHeader
        title="Please log in"
        subtitle={props.text} 
        style={{marginBottom:'-1em'}}
      />

      <CardActions>
        <Link to="/account">
          <FlatButton label="Account Page" 
                      style={{
                        marginBottom:'0.5em'
                      }}
          />
        </Link>
      </CardActions>

    </Card>
  </div>
    
      



)