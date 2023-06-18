import React, { useState } from "react";

const Counter = ()=>{
    const [counter, setCounter] = useState(0)

    let increament = () => {
        setCounter(counter + 1);
      };
      let decreament = () => {
        setCounter(counter - 1);
      };

    return (
        <div>
      <div>Счетчик: {counter}</div>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
        </div>
    )
}

export default Counter;