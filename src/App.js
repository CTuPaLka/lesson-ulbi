import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("hello");

  let increament = () => {
    setCounter(counter + 1);
  };
  let decreament = () => {
    setCounter(counter - 1);
  };
  let changeinputValue = () => {
    setValue();
  };

  return (
    <div>
      <div>Счетчик: {counter}</div>
      <div>{value}</div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
    </div>
  );
}

export default App;
