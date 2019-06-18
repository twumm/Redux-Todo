import { combineReducers } from 'redux';

import { ADD_TODO } from '../actions/index';

const initialState = {
  todos: [],
}

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}

export const combinedReducers = combineReducers({
  todos: todosReducer,
});