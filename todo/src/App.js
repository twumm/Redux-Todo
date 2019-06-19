import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { combinedReducers } from './reducers/index';
import Container from './components/Container';
import './App.css';

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
