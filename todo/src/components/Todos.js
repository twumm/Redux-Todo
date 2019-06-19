import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from '../actions/index';

import Todo from './Todo';


export function Todos(props) {
  const todos = props.todos || [];

  return (
    <div>
      <h3>Todos</h3>
      <div>
        {
          todos.map(todo =>
            (
              <Todo
                key={todo.id}
                todo={todo}
                completeTodo={props.completeTodo}
                deleteTodo={props.deleteTodo}
              />
            )
          )
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, {completeTodo, deleteTodo})(Todos);
