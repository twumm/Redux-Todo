import React from 'react';
import Todo from './Todo';

export default function Todos() {
  const todos = this.props.todos || [];

  return (
    <div>
      <h3>Todos</h3>
      <div>
        {
          todos.map(todo =>
            (
              <Todo
                task={todo.task}
                completed={todo.completed}
              />
            )
          )
        }
      </div>
    </div>
  )
}
