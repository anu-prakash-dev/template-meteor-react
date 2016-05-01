import React from 'react';

import { TaskDelete }  from './TaskDelete.jsx';
import { TaskCheck }   from './TaskCheck.jsx';
import { TaskPrivate } from './TaskPrivate.jsx';
import { TaskText }    from './TaskText.jsx';


// This component represents the Tasks page of this app
export class TaskOne extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var p = this.props;

    return (

      <li key={ p.myKey } className={p.taskClassName} >

        <div className="lineText flex">
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
        </div>


        <div className="lineControls flex">
          { p.showPrivateButton && !p.editTask  ?
            <TaskPrivate
              task={ p.task }
              togglePrivate={p.togglePrivate.bind(this)}
            /> : ""
          }

          { !p.editTask ?
            <TaskCheck
              task={ p.task }
              toggleChecked={p.toggleChecked.bind(this)}
            />:""
          }


          { !p.editTask ?
            <TaskDelete
              task={ p.task }
              deleteThisTask={p.deleteThisTask.bind(this)}
            />:""
          }
        </div>

      </li>

    );
  }
  
}
