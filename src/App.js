import React, { useState, useReducer } from "react";

function reducer(state, action) {
  console.log("reducer function");
  console.log(`action:${action.type}`);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //const [count, setCount] = useState(0);

  function increment() {
    console.log("increment");
    dispatch({ type: "increment" });
  }
  function decrement() {
    console.log("decrement");
    dispatch({ type: "decrement" });
  }

  function resetCount() {
    console.log("resetCount");
    dispatch({ type: "reset" });
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
