import React from 'react';

import {Colors} from '../Theme';

import ButtonFlat     from '../components/ui/ButtonFlat'
import LinkButtonFlat from '../components/ui/LinkButtonFlat'

import ListDraggable  from '../components/ui/ListDraggable'
import ListAnimated   from '../components/ui/ListAnimated'
 
import LoaderLinear   from '/client/app/components/ui/LoaderLinear'
import LoaderCircular from '/client/app/components/ui/LoaderCircular'
import LoaderBounce   from '/client/app/components/ui/LoaderBounce'
import LoaderPulse    from '/client/app/components/ui/LoaderPulse'
import LoaderScale    from '/client/app/components/ui/LoaderScale'
import LoaderMoon     from '/client/app/components/ui/LoaderMoon'
import LoaderRing     from '/client/app/components/ui/LoaderRing'



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
          
          <h2> Material UI buttons </h2>
          <div className="wrapper-buttons flex">
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
            
          

          <h2> Draggable List </h2>
          <ListDraggable/>
          
          
          
          {/*
          <h2> Animated Todo List </h2>
          <ListAnimated/>
          */}
          
         
          
          <h2> Loaders </h2>
          <div className="wrapper-loader">
            
            <label>Material Ui &alpha; Halogen</label>
            <LoaderLinear
              backgroundColor={Colors.blueDark} 
              color={Colors.active}
            />
            
            <div className="flex">
              <div>
                <LoaderCircular
                  backgroundColor={Colors.blueDark} 
                  color={Colors.active}
                />
              </div>
              <div>
                <LoaderBounce 
                  color={Colors.active}
                />
              </div>
              <div>
                <LoaderPulse 
                  color={Colors.active}
                />
              </div>
            </div>
            
            <div className="flex">
              <div>
                <LoaderScale
                  backgroundColor={Colors.blueDark} 
                  color={Colors.active}
                />
              </div>
              <div>
                <LoaderMoon 
                  color={Colors.active}
                />
              </div>
              <div>
                <LoaderRing 
                  color={Colors.active}
                />
              </div>
            </div>

          </div>
          
        </section>
        
      </div>
    );
  }

};


export default PageShowcase;