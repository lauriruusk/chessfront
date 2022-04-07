
import { useState } from 'react';
import './App.css';
import whitequeen from './images/wqueen.png';
import whiteking from './images/wking.png'




const App = () => {
  // const [board, setBoard] = useState([]);
  // const pieces =
  // [
  //   white = {
  //     "wk": "king",
  //     "wq": "queen",
  //     "wt1": "tower1",
  //     "wt2": "tower2",
  //     "wb": "bishop",
  //     "wh": "horse",
  //     "wp": "pawn",
  //   },
  //   black = {

  //   },
  // ]
  const piece = "white";
// const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const board = () => {
//   for (let i=1;i<=8;i++){
//     for(let k=1;k<=8;k++){
//       <div className="tile" id={columns[i] + (k)}></div>
//     }
//   }
// }
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td className="lgt" id="a1"></td>
            <td className="drk" id="a2">{piece}</td>
            <td className="lgt" id="a3">A3</td>
            <td className="drk" id="a4">A4</td>
            <td className="lgt" id="a5">A5</td>
            <td className="drk" id="a6">A6</td>
            <td className="lgt" id="a7">A7</td>
            <td className="drk" id="a8">A8</td>
          </tr>
          <tr>
            <td className="drk" id="b1">B1</td>
            <td className="lgt" id="b2">B2</td>
            <td className="drk" id="b3">B3</td>
            <td className="lgt" id="b4">B4</td>
            <td className="drk" id="b5">B5</td>
            <td className="lgt" id="b6">B6</td>
            <td className="drk" id="b7">B7</td>
            <td className="lgt" id="b8">B8</td>
          </tr>
          <tr>
            <td className="lgt" id="c1">C1</td>
            <td className="drk" id="c2">C2</td>
            <td className="lgt" id="c3">C3</td>
            <td className="drk" id="c4">C4</td>
            <td className="lgt" id="c5">C5</td>
            <td className="drk" id="c6">C6</td>
            <td className="lgt" id="c7">C7</td>
            <td className="drk" id="c8">C8</td>
          </tr>
          <tr>
            <td className="drk" id="d1">D1</td>
            <td className="lgt" id="d2">D2</td>
            <td className="drk" id="d3">D3</td>
            <td className="lgt" id="d4">D4</td>
            <td className="drk" id="d5">D5</td>
            <td className="lgt" id="d6">D6</td>
            <td className="drk" id="d7">D7</td>
            <td className="lgt" id="d8">D8</td>
          </tr>
          <tr>
            <td className="lgt" id="e1">E1</td>
            <td className="drk" id="e2">E2</td>
            <td className="lgt" id="e3">E3</td>
            <td className="drk" id="e4">E4</td>
            <td className="lgt" id="e5">E5</td>
            <td className="drk" id="e6">E6</td>
            <td className="lgt" id="e7">E7</td>
            <td className="drk" id="e8">E8</td>
          </tr>
          <tr>
            <td className="drk" id="a3">F1</td>
            <td className="lgt" id="b3">F2</td>
            <td className="drk" id="c3">F3</td>
            <td className="lgt" id="d3">F4</td>
            <td className="drk" id="e3">F5</td>
            <td className="lgt" id="f3">F6</td>
            <td className="drk" id="g3">F7</td>
            <td className="lgt" id="h3">F8</td>
          </tr>
          <tr>
            <td className="lgt" id="a2">G1</td>
            <td className="drk" id="b2">G2</td>
            <td className="lgt" id="c2">G3</td>
            <td className="drk" id="d2">G4</td>
            <td className="lgt" id="e2">G5</td>
            <td className="drk" id="f2">G6</td>
            <td className="lgt" id="g2">G7</td>
            <td className="drk" id="h2">G8</td>
          </tr>
          <tr>
            <td className="drk" id="a1">H1</td>
            <td className="lgt" id="b1">H2</td>
            <td className="drk" id="c1">H3</td>
            <td className="lgt" id="d1"><img src={whitequeen} alt="wtqueen" /></td>
            <td className="drk" id="e1"><img src={whiteking} alt="wtqueen" /></td>
            <td className="lgt" id="f1">H6</td>
            <td className="drk" id="g1">H7</td>
            <td className="lgt" id="h1">H8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
