import { blackPieces, whitePieces } from "./pieces"
const Board =() => {
    return (
        <div>
            <table>
            <tbody>
            <tr>
                <td className="lgt" id="a8"><img src={blackPieces[0].image} alt="btower" /></td>
                <td className="drk" id="b8"><img src={blackPieces[1].image} alt="bhorse" /></td>
                <td className="lgt" id="c8"><img src={blackPieces[2].image} alt="bbishop" /></td>
                <td className="drk" id="d8"><img src={blackPieces[3].image} alt="bqueen" /></td>
                <td className="lgt" id="e8"><img src={blackPieces[4].image} alt="bking" /></td>
                <td className="drk" id="f8"><img src={blackPieces[2].image} alt="bbishop" /></td>
                <td className="lgt" id="g8"><img src={blackPieces[1].image} alt="bhorse" /></td>
                <td className="drk" id="h8"><img src={blackPieces[0].image} alt="btower" /></td>
            </tr>
            <tr>
                <td className="drk" id="a7"><img src={blackPieces[5].image} alt="bpawn" /></td>
                <td className="lgt" id="b7"><img src={blackPieces[5].image} alt="bpawn" /></td>
                <td className="drk" id="c7"><img src={blackPieces[5].image} alt="bpawn" /></td>
                <td className="lgt" id="d7"><img src={blackPieces[5].image} alt="bpawn" /></td>
                <td className="drk" id="e7"><img src={blackPieces[5].image} alt="bpawn" /></td>
                <td className="lgt" id="f7"><img src={blackPieces[5].image} alt="bpawn" /></td>
                <td className="drk" id="g7"><img src={blackPieces[5].image} alt="bpawn" /></td>
                <td className="lgt" id="h7"><img src={blackPieces[5].image} alt="bpawn" /></td>
            </tr>
            <tr>
                <td className="lgt" id="a6">C1</td>
                <td className="drk" id="b6">C2</td>
                <td className="lgt" id="c6">C3</td>
                <td className="drk" id="d6">C4</td>
                <td className="lgt" id="e6">C5</td>
                <td className="drk" id="f6">C6</td>
                <td className="lgt" id="g6">C7</td>
                <td className="drk" id="h6">C8</td>
            </tr>
            <tr>
                <td className="drk" id="a5">D1</td>
                <td className="lgt" id="b5">D2</td>
                <td className="drk" id="c5">D3</td>
                <td className="lgt" id="d5">D4</td>
                <td className="drk" id="e5">D5</td>
                <td className="lgt" id="f5">D6</td>
                <td className="drk" id="g5">D7</td>
                <td className="lgt" id="h5">D8</td>
            </tr>
            <tr>
                <td className="lgt" id="a4">E1</td>
                <td className="drk" id="b4">E2</td>
                <td className="lgt" id="c4">E3</td>
                <td className="drk" id="d4">E4</td>
                <td className="lgt" id="e4">E5</td>
                <td className="drk" id="f4">E6</td>
                <td className="lgt" id="g4">E7</td>
                <td className="drk" id="h4">E8</td>
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
                <td className="lgt" id="a2"><img src={whitePieces[5].image} alt="wpawn" /></td>
                <td className="drk" id="b2"><img src={whitePieces[5].image} alt="wpawn" /></td>
                <td className="lgt" id="c2"><img src={whitePieces[5].image} alt="wpawn" /></td>
                <td className="drk" id="d2"><img src={whitePieces[5].image} alt="wpawn" /></td>
                <td className="lgt" id="e2"><img src={whitePieces[5].image} alt="wpawn" /></td>
                <td className="drk" id="f2"><img src={whitePieces[5].image} alt="wpawn" /></td>
                <td className="lgt" id="g2"><img src={whitePieces[5].image} alt="wpawn" /></td>
                <td className="drk" id="h2"><img src={whitePieces[5].image} alt="wpawn" /></td>
            </tr>
            <tr>
                <td className="drk" id="a1"><img src={whitePieces[0].image} alt="wtower" /></td>
                <td className="lgt" id="b1"><img src={whitePieces[1].image} alt="whorse" /></td>
                <td className="drk" id="c1"><img src={whitePieces[2].image} alt="wbishop" /></td>
                <td className="lgt" id="d1"><img src={whitePieces[3].image} alt="wqueen" /></td>
                <td className="drk" id="e1"><img src={whitePieces[4].image} alt="wking" /></td>
                <td className="lgt" id="f1"><img src={whitePieces[2].image} alt="wbishop" /></td>
                <td className="drk" id="g1"><img src={whitePieces[1].image} alt="whorse" /></td>
                <td className="lgt" id="h1"><img src={whitePieces[0].image} alt="wtow" /></td>
            </tr>
            </tbody>
        </table>
        </div>
        
)
}

export default Board;
