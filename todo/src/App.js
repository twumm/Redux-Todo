import React from 'react';
import { createStore ,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Container from './components/Container';
import './App.css';

function App() {
  return (
    <Container />
  );
}

export default App;
