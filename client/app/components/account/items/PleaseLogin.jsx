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
            paddingLeft:'0.5em',
            backgroundColor: Colors.secondary
          }}
    >

      <CardHeader
        title="Please log in"
        subtitle={props.text} 
        style={{marginBottom:'-1em',}}
        titleStyle={{color: Colors.textWhitePrimary,}}
        subtitleStyle={{color: Colors.textWhiteSecondary,}}
      />

      <CardActions>
        <Link to="/account">
          <FlatButton label="Account Page" 
                      backgroundColor="rgba(255, 255, 255, 0.13)"
                      style={{
                        marginBottom:'0.5em',
                        color: Colors.textWhitePrimary
                      }}
          />
        </Link>
      </CardActions>

    </Card>
  </div>
    
      



)