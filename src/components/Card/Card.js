import React from "react";
import './Card.css';

function Card({nums, onDelete}) {
    return (
        <div className="card-block">
            {nums.map(item => {
                return (
                    <div key={item.key} className="card">
                        <div>
                            {item.num}
                        </div>
                        <span className="delete" onClick={() => onDelete(item.key)}>x</span>
                    </div>
                );
            })}
        </div>
        
    )
}

export default Card;