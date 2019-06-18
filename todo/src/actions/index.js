import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';

export function addTodo(task) {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      task,
      completed: false,
    }
  }
}