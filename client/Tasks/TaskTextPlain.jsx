

import React from 'react';


// This component represents the Tasks page of this app
export class TaskTextPlain extends React.Component {

  constructor(props) {
        super(props);
    }

  onClick() {
    var p = this.props
    p.beginTextEdit(p.task._id, p.task.text)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

          <span className="text">
            <strong>{p.task.username}</strong>:
            <span onClick={this.onClick.bind(this)}>
              {p.task.text}
            </span>
          </span>

    );
  }
}
