import React from "react";

// Class Component
const Counter = ({ index, score, changeScore })=> {

    return (
    <div className="counter">
    <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
    <span className="counter-score">{score}</span>
    
    {/* onclick with arrow function helps to bind the state */}
    <button className="counter-action increment" onClick={() =>changeScore(index, 1)}> + </button>
    
    </div>
    )
   
  }

  
  export default Counter;