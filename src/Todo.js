import React from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, tododispatch }) => {
  function deletedata() {
    console.log("delete");
  }
  function toggle() {
    console.log(todo.id);
    tododispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: todo.id }
    });
  }
  return (
    <div>
      <span style={{ color: todo.complete ? "#aaa" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={toggle}>toggle</button>
      <button onClick={deletedata}>delete</button>
    </div>
  );
};

export default Todo;
