import React from "react";
import { blackPieces, whitePieces } from "./pieces";

const Tower = () => {
    return (
        <div>
            <img src={blackPieces[0].image} alt="black tower" />
        </div>
        
    )
}

export default Tower;