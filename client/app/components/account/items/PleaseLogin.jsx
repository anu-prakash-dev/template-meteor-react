import React from 'react';
import { Link } from 'react-router';

import {Colors} from '/client/app/Theme';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';



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