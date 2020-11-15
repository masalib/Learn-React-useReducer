import React, { useState, useReducer } from "react";

function reducer(state, action) {
  console.log("reducer function");
  return { count: state.count + 1 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //const [count, setCount] = useState(0);

  function increment() {
    console.log("increment");
    dispatch();
  }
  function decrement() {
    console.log("decrement");
  }

  function resetCount() {
    console.log("resetCount");
  }

  return (
    <>
      <span>{state.count}</span>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </>
  );
}
