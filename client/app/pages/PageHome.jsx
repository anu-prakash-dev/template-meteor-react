import React from 'react';
import DragAndDrop from '/client/app/components/draganddrop/DragAndDrop'
import CardLine    from '/client/app/components/cards/CardLine'

class PageHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(

      <div className="Page PageHome">
        {/*
          <h1> DragAndDrop </h1>
          <DragAndDrop />
          <CardLine />
        */}
        
      </div>
    );
  } 
  
}

export default PageHome;
