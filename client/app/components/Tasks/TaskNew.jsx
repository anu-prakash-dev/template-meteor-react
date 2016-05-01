import React from 'react';

import { Colors }   from '/client/app/Theme';
import InputFloatingLabel from '/client/app/components/ui/InputFloatingLabel'

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

          <form className="new-task" onSubmit={p.handleSubmit.bind(this)} >

            <InputFloatingLabel
              name          = "text"
              type          = "text"
              floatingLabel = "Add a new task"
              value         = {p.text}
              onChange      = {p.onTextChange.bind(this)}
              style         = {{width: "100%", marginTop: "-10px"}}
              inputColor         = {Colors.primary}
              floatingLabelColor = {Colors.primary}
              underlineColor      = {Colors.primary}
              underlineFocusColor = {Colors.primary}
            />
          
            <button className="add">+</button>
            
          </form>

        </div>

      );

    }
  }
