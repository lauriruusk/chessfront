import React from "react";

const Square = ({black, children }) => {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    console.log("fill", fill);
    console.log("stroke", stroke);
    console.log("black", black)
    return (
        <div 
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </div>
    )
}

export default Square;