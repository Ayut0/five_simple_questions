import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Contents/Content';
import Header from './UI/Header';

function App() {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
}

export default App;
