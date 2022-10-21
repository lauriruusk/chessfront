
// import { useState } from 'react';
import './App.css';
import Board from './components/Board'

const App = ({knightPosition}) => {

  return (
    <div className="App">
      <Board knightPosition={knightPosition} />
    </div>
  );
}

export default App;
