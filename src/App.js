import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset"
};

function reducer(state, action) {
  console.log("reducer function");
  console.log(`action:${action.type}`);
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
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
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    console.log("decrement");
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function resetCount() {
    console.log("resetCount");
    dispatch({ type: ACTIONS.RESET });
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
