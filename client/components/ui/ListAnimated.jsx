import React from 'react';
import {TransitionMotion, spring, presets} from 'react-motion';



class ListAnimated extends React.Component {

  constructor(props){
    super(props);
    this.handleChange     = this.handleChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.handleDone       = this.handleDone.bind(this);
    this.handleToggleAll  = this.handleToggleAll.bind(this);
    this.handleSelect     = this.handleSelect.bind(this);
    this.handleClearCompleted  = this.handleClearCompleted.bind(this);
    this.handleDestroy    = this.handleDestroy.bind(this);
    this.getDefaultValue  = this.getDefaultValue.bind(this);
    this.getEndValue      = this.getEndValue.bind(this);
    this.willEnter        = this.willEnter.bind(this);
    this.willLeave        = this.willLeave.bind(this);
    this.state={
      todos: {
        // key is creation date
        't1': {text: 'Board the plane', isDone: false},
        't2': {text: 'Sleep', isDone: false},
        't3': {text: 'Try to finish coneference slides', isDone: false},
        't4': {text: 'Eat cheese and drink wine', isDone: false},
        't5': {text: 'Go around in Uber', isDone: false},
        't6': {text: 'Talk with conf attendees', isDone: false},
        't7': {text: 'Show Demo 1', isDone: false},
        't8': {text: 'Show Demo 2', isDone: false},
        't9': {text: 'Lament about the state of animation', isDone: false},
        't10': {text: 'Show Secret Demo', isDone: false},
        't11': {text: 'Go home', isDone: false},
      },
      value: '',
      selected: 'all',
    }
  }


  // logic from todo, unrelated to animation
  handleChange({target: {value}}) {
    this.setState({value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {todos, value} = this.state;
    this.setState({
      todos: {
        ['t' + Date.now()]: {text: value, isDone: false},
        ...todos,
      },
    });
  }

  handleDone(key) {
    const {todos} = this.state;
    todos[key].isDone = !todos[key].isDone;
    this.forceUpdate();
  }

  handleToggleAll() {
    const {todos} = this.state;
    const keys = Object.keys(todos);
    const allDone = keys.every(date => todos[date].isDone);
    keys.forEach(date => todos[date].isDone = !allDone);
    this.forceUpdate();
  }

  handleSelect(selected) {
    this.setState({selected});
  }

  handleClearCompleted() {
    const {todos} = this.state;
    const newTodos = {};
    for (const prop in todos) {
      if (!todos[prop].isDone) {
        newTodos[prop] = todos[prop];
      }
    }
    this.setState({todos: newTodos});
  }

  handleDestroy(date) {
    const {todos} = this.state;
    delete todos[date];
    this.forceUpdate();
  }

  // actual animation-related logic
  getDefaultValue() {
    const {todos} = this.state;
    return Object.keys(todos)
      .reduce((configs, date) => {
        configs[date] = {
          height:  spring(0),
          opacity: spring(1),
          data:    todos[date],
        };
        return configs;
      }, {});
  }

  getEndValue() {
    const {todos, value, selected} = this.state;
    return Object.keys(todos)
      .filter(date => {
        const todo = todos[date];
        return todo.text.toUpperCase().indexOf(value.toUpperCase()) >= 0 &&
          (selected === 'completed' && todo.isDone ||
           selected === 'active' && !todo.isDone ||
           selected === 'all');
      })
      .reduce((configs, date) => {
        configs[date] = {
          height:  spring(60, presets.gentle),
          opacity: spring(1, presets.gentle),
          data:    todos[date],
        };
        return configs;
      }, {});
  }

  willEnter(date) {
    return {
      height: spring(0),
      opacity: spring(1),
      data: this.state.todos[date],
    };
  }

  willLeave(date, styleThatJustLeft) {
    console.log(date);
    console.log(styleThatJustLeft);
    return {
      height:  spring(0),
      opacity: spring(0),
      data:    styleThatJustLeft.data,
    };
  }

    
  render() {
    
    const {todos, value, selected} = this.state;
    
    
    return (
      <section className="ListAnimated">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus={true}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </header>
        
        <section className="main">
          
          <input className="toggle-all" type="checkbox" onChange={this.handleToggleAll} />
          
          <TransitionMotion 
            defaultStyles = {this.getDefaultValue()} 
            styles        = {this.getEndValue()} 
            willLeave = {this.willLeave}
            willEnter = {this.willEnter}
          >
            {configs =>
              <ul className="todo-list">
                {Object.keys(configs).map(date => {
                  const config = configs[date];
                  const {data: {isDone, text}, ...style} = config;
                  return (
                    <li key={date} style={style} className={isDone ? 'completed' : ''}>
                      <div className="view">
                        <input
                          className="toggle"
                          type="checkbox"
                          onChange={this.handleDone.bind(null, date)}
                          checked={isDone}
                        />
                        <label>{text}</label>
                        <button
                          className="destroy"
                          onClick={this.handleDestroy.bind(null, date)}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            }
          </TransitionMotion>
          
        </section>
        
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {Object.keys(todos).filter(key => !todos[key].isDone).length}
            </strong> item left
          </span>
          <ul className="filters">
            <li>
              <a
                className={selected === 'all' ? 'selected' : ''}
                onClick={this.handleSelect.bind(null, 'all')}>
                All
              </a>
            </li>
            <li>
              <a
                className={selected === 'active' ? 'selected' : ''}
                onClick={this.handleSelect.bind(null, 'active')}>
                Active
              </a>
            </li>
            <li>
              <a
                className={selected === 'completed' ? 'selected' : ''}
                onClick={this.handleSelect.bind(null, 'completed')}>
                Completed
              </a>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.handleClearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
      
    );
  }

}

export default ListAnimated;
