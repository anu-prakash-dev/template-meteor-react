import React from 'react';

import {Colors} from '../Theme';

import ButtonFlat     from '../components/ui/ButtonFlat'
import LinkButtonFlat from '../components/ui/LinkButtonFlat'

import ListDraggable  from '../components/ui/ListDraggable'
import ListAnimated   from '../components/ui/ListAnimated'
 
 

class PageShowcase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {}
    
  render() {
    return (
  
      <div className="Page PageShowcase">

        <h1> Showcase </h1>
        
        
        <section>

          <br/>
          <br/>
          <br/>

          <p> Material UI buttons </p>
          <div className="wrapper-buttons">
            <LinkButtonFlat 
              link="/home" 
              label="Home" 
              backgroundColor={Colors.blueMedium1}
            />
            <ButtonFlat 
              label="SnackBar" 
              backgroundColor={Colors.blueMedium1}
              onClick={this.props.openSnackBar}
            />
          </div>

          <br/>
          <br/>
          <br/>

          <p> Draggable List </p>
          <br/>
          <br/>
          <ListDraggable/>
          
          {/*
          <p> Animated Todo List </p>
          <br/>
          <br/>
          <ListAnimated/>
          */}
          
          
          <br/>
          <br/>
          
          
        </section>
        
      </div>
    );
  }

};


export default PageShowcase;