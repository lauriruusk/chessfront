import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import Board from './components/Board'
import { observe } from './components/Game'


const root = document.getElementById('root')
// const knightPosition = [0, 0]
observe((knightPosition) =>
  ReactDOM.render(
    
      <App knightPosition={knightPosition} />,
    
    root
  )
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

