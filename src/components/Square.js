import React from "react";

const Square = ({ black, children }) => {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    console.log("fill", fill);
    console.log("stroke", stroke);
    console.log("black", black)
    console.log(children)
    return (
        <div 
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '50px',
                height: '50px',
                display: 'inline-block'
            }}
        >
            {children}
        </div>
    )
}

export default Square;