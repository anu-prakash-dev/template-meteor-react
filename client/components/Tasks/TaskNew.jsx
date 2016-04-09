import React from 'react';


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

        <div className="task-new">
          
          <h2>Add new Task</h2>

          <form className="new-task" onSubmit={p.handleSubmit.bind(this)} >

            <input
              type="text"
              placeholder="Type to add new tasks"
              value={p.text}
              onChange={p.onTextChange.bind(this)}
            />

            <button className="add">+</button>
            
          </form>

        </div>

      );

    }
  }
