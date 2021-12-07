import React from 'react';
import HomePage from './HomePage';
import { Styled } from 'direflow-component';
import styles from './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => (
  <Styled styles={styles}>
  <div className="app">
    <BrowserRouter><HomePage/></BrowserRouter>
  </div>
  </Styled>
);

export default App;
