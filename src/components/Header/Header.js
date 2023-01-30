import React from "react";
import "./Header.css";

function Header({onAdd, onSort}){
    return (
        <div className="header">
            <button className="add" onClick={onAdd}>add card</button>
            <button className="sort" onClick={onSort}>sort cards</button>
        </div>
    )
}

export default Header;