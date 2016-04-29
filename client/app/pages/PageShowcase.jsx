import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Colors} from '../Theme';

import ButtonFlat     from '../components/ui/ButtonFlat'
import LinkButtonFlat from '../components/ui/LinkButtonFlat'

import ListDraggable  from '../components/ui/lists/ListDraggable'
import ListAnimated   from '../components/ui/lists/ListAnimated'
 
import LoaderLinear   from '/client/app/components/ui/loaders/LoaderLinear'
import LoaderCircular from '/client/app/components/ui/loaders/LoaderCircular'
import LoaderBounce   from '/client/app/components/ui/loaders/LoaderBounce'
import LoaderPulse    from '/client/app/components/ui/loaders/LoaderPulse'
import LoaderScale    from '/client/app/components/ui/loaders/LoaderScale'
import LoaderMoon     from '/client/app/components/ui/loaders/LoaderMoon'
import LoaderRing     from '/client/app/components/ui/loaders/LoaderRing'



class PageShowcase extends React.Component {

  constructor(props) {
    super(props);
    this.showListDraggable = this.showListDraggable.bind(this);
    this.showListAnimated = this.showListAnimated.bind(this);
    this.state = {
      isListDraggable: true
    };
  }
  
  showListDraggable(){
    this.setState({ isListDraggable: true });
  }
      
  showListAnimated(){
    this.setState({ isListDraggable: false });
  }
    
  render() {
    return (
  
      <div className="Page PageShowcase">

        <h1> Showcase </h1>
        
        <section>
          
          <h2> Material-UI </h2>
          <div className="wrapper-buttons flex">
            <ButtonFlat 
              label="Drawer" 
              backgroundColor={Colors.blueMedium1}
              onClick={this.props.toggleDrawer}
            />
            <ButtonFlat 
              label="SnackBar" 
              backgroundColor={Colors.blueMedium1}
              onClick={this.props.openSnackBar}
            />
            <ButtonFlat 
              label="Dialog" 
              backgroundColor={Colors.blueMedium1}
              onClick={this.props.openSnackBar}
            />
          </div>


          <h2> React-Motion </h2>
          <div className="wrapper-buttons flex">
            <ButtonFlat 
              label="Draggable List " 
              backgroundColor={Colors.blueMedium1}
              onClick={this.showListDraggable}
            />
            <ButtonFlat 
              label="Animated Todo List" 
              backgroundColor={Colors.blueMedium1}
              onClick={this.showListAnimated}
            />
          </div>
          
          
          <ReactCSSTransitionGroup
            component="div"
            transitionName="lists"
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}
          >
            {/*props.children : page received from Routes.jsx*/}
            { this.state.isListDraggable? 
                <ListDraggable/>
              :
                <ListAnimated/>
            }
          </ReactCSSTransitionGroup>
          {/*
          <ListDraggable/>
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