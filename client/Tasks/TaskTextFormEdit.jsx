

import React from 'react';


// This component presents a form for editing the text field of a specific Task
export class TaskTextFormEdit extends React.Component {

  constructor(props) {
        super(props);
    }

  processSubmit(event) {
    event.preventDefault();
    this.props.endTextEditSave(this.props.editText)
  }

  onTextChange(event) {
    this.props.processTextTyping(event.target.value)
  }

  btnCancel() {
    this.props.endTextEditClear()
  }

  btnClear() {
    this.props.processTextClear()
  }

  btnReset() {
    this.props.processTextReset()
  }

/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props

      return (

        <div>

          <form className={ p.frmClassName }
            onSubmit={this.processSubmit.bind(this)}
            >

            <input
              autoFocus
              type="text"
              value={p.editText}
              onChange={this.onTextChange.bind(this)}
            />

            <button type="button" onClick={this.btnCancel.bind(this)}>Cancel</button>
            <button type="button" onClick={this.btnClear.bind(this)}>Clear</button>
            <button type="button" onClick={this.btnReset.bind(this)}>Reset</button>
            <button type="button" onClick={this.processSubmit.bind(this)}>Submit</button>

          </form>

        </div>

      );
    }
  }
