import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#aaa" : "#000" }}>
        {todo.name}
      </span>
      <button>toggle</button>
      <button>delete</button>
    </div>
  );
};

export default Todo;
