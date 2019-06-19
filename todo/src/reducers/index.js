import { combineReducers } from 'redux';

import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/index';

const initialState = {
  todos: [],
}

export function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case (ADD_TODO):
      return [...state, action.payload]
    case (COMPLETE_TODO):
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case (DELETE_TODO):
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state
  }
}

export const combinedReducers = combineReducers({
  todos: todosReducer,
});