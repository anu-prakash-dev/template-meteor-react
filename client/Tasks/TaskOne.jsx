

import React from 'react';


import { TaskDelete } from './TaskDelete.jsx';
import { TaskCheck } from './TaskCheck.jsx';
import { TaskPrivate } from './TaskPrivate.jsx';
import { TaskText } from './TaskText.jsx';


// This component represents the Tasks page of this app
export class TaskOne extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <li key={ p.key } className={p.taskClassName} >

          <TaskDelete
            task={ p.task }
            deleteThisTask={p.deleteThisTask.bind(this)}
          />

          { p.showPrivateButton ?
            <TaskPrivate
              task={ p.task }
              togglePrivate={p.togglePrivate.bind(this)}
            /> : ""
          }

          <TaskCheck
            task={ p.task }
            toggleChecked={p.toggleChecked.bind(this)}
          />

          <TaskText
            task={ p.task }
            edit={p.edit}
            editTask={p.editTask}
            beginTextEdit={p.beginTextEdit.bind(this)}
            processTextTyping={p.processTextTyping.bind(this)}
            processTextClear={p.processTextClear.bind(this)}
            processTextReset={p.processTextReset.bind(this)}
            endTextEditSave={p.endTextEditSave.bind(this)}
            endTextEditClear={p.endTextEditClear.bind(this)}
          />

        </li>


    );
  }
}
