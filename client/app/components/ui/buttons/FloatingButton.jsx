import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class FloatingButton extends React.Component{

  constructor(props){
      super(props);
  }

  render() {
    return (
      <FloatingActionButton onClick={this.props.onClick}>
        <ContentAdd />
      </FloatingActionButton>
    );
  }

};


export default FloatingButton;
