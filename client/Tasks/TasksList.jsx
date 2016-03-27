

import React from 'react';
import { TasksHeader } from './TasksHeader.jsx';
import { TasksFilter } from './TasksFilter.jsx';
import { TaskOne } from './TaskOne.jsx';


// This component represents the TasksList page of this app
export class TasksList extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/
  renderTasks() {

    var p = this.props;

    // Map tasks to TaskRow array
    return p.tasks.map((task) => {

      var showPrivateButton = false;
      var editTask = false;
      if (task.owner === Meteor.userId()) {
        showPrivateButton = "true";
        if (task.private) {
          task.privateBtnLbl = "private";
        } else {
          task.privateBtnLbl = "public";
        }
        if (p.edit.taskId === task._id) {
          editTask = true;
        }
      }

      const taskClassName =  "task-li "
                              + (task.checked ? "task-checked " : "")
                              + (task.private ? "task-private" : "");

      return <TaskOne
        key={task._id}
        task={task}
        edit={p.edit}
        editTask={editTask}
        showPrivateButton={showPrivateButton}
        taskClassName={taskClassName}
        toggleChecked={p.toggleChecked.bind(this)}
        togglePrivate={p.togglePrivate.bind(this)}
        deleteThisTask={p.deleteThisTask.bind(this)}
        beginTextEdit={p.beginTextEdit.bind(this)}
        processTextTyping={p.processTextTyping.bind(this)}
        processTextClear={p.processTextClear.bind(this)}
        processTextReset={p.processTextReset.bind(this)}
        endTextEditSave={p.endTextEditSave.bind(this)}
        endTextEditClear={p.endTextEditClear.bind(this)}
      />;

    });
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <div>

          <TasksHeader
            incompleteCount={p.incompleteCount}
          />

          <TasksFilter
            toggleHideCompleted={p.toggleHideCompleted.bind(this)}
          />

          <ul className="task-ul">
            {this.renderTasks()}
          </ul>

        </div>

      );
    }
  }
