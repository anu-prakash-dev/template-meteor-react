import React from 'react';
import DragAndDrop from '/client/app/components/draganddrop/DragAndDrop'
import CardFull    from '/client/app/components/ui/cards/CardFull'

class PageHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(

      <div className="Page PageHome">

        {/*
          <DragAndDrop />
        */}
        
          <CardFull />
        
      </div>
    );
  } 
  
}

export default PageHome;
