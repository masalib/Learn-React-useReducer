import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function changeCount(amount) {
    setCount((prevCount) => prevCount + amount);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <span>{count}</span>
      <div>
        <button onClick={() => changeCount(1)}>+</button>
        <button onClick={() => changeCount(-1)}>-</button>
        <button onClick={() => resetCount()}>Reset</button>
      </div>
    </>
  );
}
