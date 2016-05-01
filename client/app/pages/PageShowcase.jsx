import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Colors} from '/client/app/Theme';

import ButtonFlat     from '/client/app/components/ui/buttons/ButtonFlat'
import LinkButtonFlat from '/client/app/components/ui/buttons/LinkButtonFlat'

import ListDraggable  from '/client/app/components/ui/lists/ListDraggable'
import ListAnimated   from '/client/app/components/ui/lists/ListAnimated'
 
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
    this.showListAnimated  = this.showListAnimated.bind(this);
    this.closeListView = this.closeListView.bind(this);
    this.state = {
      activeList: null
    };
  }
  
  showListDraggable(){
    this.setState({ activeList: 'listDraggable' });
  }
      
  showListAnimated(){
    this.setState({ activeList: 'listAnimated' });
  }
        
  closeListView(){
    this.setState({ activeList: '' });
  }
    
  render() {
    
    
    {/* Layou fix for webkit : overflow when ListView is open */}
    const activeList = this.state.activeList;
    let   activeItem = null;
    if(activeList === 'listDraggable'){
      activeItem = (
        <div key="listView" className="listView">
          <div className="overlay" onClick={this.closeListView}></div> 
          <ListDraggable/>
        </div> 
      )
    }
    else if(activeList === 'listAnimated'){
      activeItem = (
        <div key="listAnimated" className="listView">
          <div className="overlay" onClick={this.closeListView}></div>
          <ListAnimated/>
        </div>
      )
    }
    
    
    {/* Layout fix for webkit : overflow when ListView is open */}
    const pageStyle=  { overflow: activeList? 'hidden':'auto' }
    
    return (
  
      <div className="Page PageShowcase" style={pageStyle}>
        
        <section>
          
          <h2> Material-UI </h2>
          <div className="wrapper-buttons">
            <ButtonFlat 
              label="Drawer" 
              backgroundColor={Colors.secondary}
              onClick={this.props.toggleDrawer}
            />
            <ButtonFlat 
              label="SnackBar" 
              backgroundColor={Colors.secondary}
              onClick={this.props.openSnackBar}
            />
            <ButtonFlat 
              label="Dialog" 
              backgroundColor={Colors.secondary}
              onClick={this.props.openDialogSimple}
            />
          </div>


          <h2> React-Motion </h2>
          <div className="wrapper-buttons">
            <ButtonFlat 
              label="Draggable List " 
              backgroundColor={Colors.secondary}
              onClick={this.showListDraggable}
            />
            <ButtonFlat 
              label="Animated Todo List" 
              backgroundColor={Colors.secondary}
              onClick={this.showListAnimated}
            />
          </div>
          
         
          <h2> Loaders </h2>
          <div className="wrapper-loader">
            
            <label>Material Ui &alpha; Halogen</label>
            <LoaderLinear
              backgroundColor={Colors.primary} 
              color={Colors.active}
            />
            
            <div className="flex">
              <div>
                <LoaderCircular
                  backgroundColor={Colors.primary} 
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
                  backgroundColor={Colors.primary} 
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
        
        {/* List Animated Container*/}
        <ReactCSSTransitionGroup
          component="div"
          transitionName="lists"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {activeItem}
        </ReactCSSTransitionGroup>

        
      </div>
    );
  }

};


export default PageShowcase;