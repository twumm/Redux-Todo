import React from 'react'
import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

export function TodoForm({ addTodo }) {
  const taskRef = React.createRef();

  const onAddTodo = (event) => {
    event.preventDefault();
    const task = taskRef.current.value;
    
    addTodo(task);
  }

  return (
    <div>
      <form
        onSubmit={onAddTodo}
      >
        <input
          placeholder="Enter task"
          ref={taskRef}
        />
        <input
          type="submit"
          value="Add task"
        />
      </form>
    </div>
  )
}

export default connect(null, { addTodo })(TodoForm);
