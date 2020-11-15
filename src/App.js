import React, { useState, useReducer } from "react";
import Todo from "./Todo";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  ADD_TODO: "add-todo"
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

function todoreducer(todostate, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todostate, newTodo(action.payload.name)];
    default:
      return todostate;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [todostate, tododispatch] = useReducer(todoreducer, []);

  const [name, setName] = useState("");

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
  function handleSubmit(e) {
    console.log("handleSubmit");
    e.preventDefault();
    tododispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: name }
    });
    setName("");
  }

  //console.log(todostate);
  todostate.map((todo) => {
    console.log(todo);
  });

  return (
    <>
      <span>{state.count}</span>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={resetCount}>reset</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          todo:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>{name}</div>
        </form>
        <div>todo list:</div>
        <div>
          {todostate.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </div>
      </div>
    </>
  );
}
