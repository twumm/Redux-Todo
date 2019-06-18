import React from 'react'

export default function Todo({ todo, completeTodo, deleteTodo }) {
  const onComplete = (event, id) => {
    completeTodo(id);
  }

  const onDelete = (event, id) => {
    deleteTodo(id);
  }

  return (
    <div>
      <div
        style={
          todo.completed
          ? {textDecoration: 'line-through'}
          : {textDecoration: ''}
        }
      >
        <label>
          <input
            type="checkbox"
            onClick={(event) => onComplete(event, todo.id)}
          />
            {todo.task}
        </label>
      </div>

      <div
        onClick={(event) => onDelete(event, todo.id)}
      ><h5>X</h5></div>
    </div>
  )
}
