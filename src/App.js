
// import { useState } from 'react';
import './App.css';
import Board from './components/Board'

const App = () => {

  // const item = document.querySelector('.item');
  // item.addEventListener('dragstart', dragstart);

  // function dragstart(e) {
  //   e.dataTransfer.setData('text/plain', e.target.id);
  //   e.target.classlist.add('hide');
  //   console.log('drag starts')
  // }

  return (
    <div className="App">
      <Board towerPosition={[0,0]} />
    </div>
  );
}

export default App;
