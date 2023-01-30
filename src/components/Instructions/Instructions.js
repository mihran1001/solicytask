import React from "react";
import './Instructions.css';

function Instructions(){
    return (
        <div className="instructions">
            <span>Press the "add card" button to add the new Card.</span>
            <span>Use the "sort cards" button to sort the Cards by the increase. Press an X icon on the top right to delete them.</span>
        </div>
    )
}

export default Instructions;