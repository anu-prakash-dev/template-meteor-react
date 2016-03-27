

import React from 'react';


// This component presents a form to add a new task
export class TaskNew extends React.Component {

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
          <h3>Add new Task</h3>

          <form className="new-task" onSubmit={p.handleSubmit.bind(this)} >

            <input
              type="text"
              placeholder="Type to add new tasks"
              value={p.text}
              onChange={p.onTextChange.bind(this)}
            />

          </form>

        </div>

      );

    }
  }
