

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

          <div className="text">
            <p className="username">{p.task.username}</p>
            <span onClick={this.onClick.bind(this)}>
              {p.task.text}
            </span>
          </div>

    );
  }
}
