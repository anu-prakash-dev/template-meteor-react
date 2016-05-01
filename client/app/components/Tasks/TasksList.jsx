import React from 'react';
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
        myKey={task._id}
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

        <div className="task-list">

          {p.count > 0 ?
              <h2> {p.count} tasks </h2>
            :
              <h2> No tasks </h2>
          }
          
          
          {p.count > 0 ?
              <div>
                {p.incompleteCount > 0 ?
                    <div>
                      <label> {p.incompleteCount} incompleted tasks </label>
                      <br/><br/>
                      <TasksFilter
                        toggleHideCompleted={p.toggleHideCompleted.bind(this)}
                      />
                    </div>
                  :
                    <div>
                      <label> No incompleted tasks </label>
                      <br/><br/>
                      <TasksFilter
                        toggleHideCompleted={p.toggleHideCompleted.bind(this)}
                      />
                    </div>
                }
              </div>
            :
              ''
          }

          <ul className="task-ul">
            {this.renderTasks()}
          </ul>

        </div>

      );
    }
  }
