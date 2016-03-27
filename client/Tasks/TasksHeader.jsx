

import React from 'react';


// App component - represents the Todo's features
export class TasksHeader extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (
        <div>
          <h3>Todo List ({p.incompleteCount})</h3>
        </div>

      );
    }
  }
