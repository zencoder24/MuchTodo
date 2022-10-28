import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

const TodoList = ({ todos }) => {
  //NOTE: This component containns the list of all of the TodoItem components
  // created. Basically it iterates over all of the todos and maps them to a
  //TodoItem component

  //TODO: Style this better
  if (!todos || !todos.length) {
    return <h1>No Todos so far</h1>;
  }

  return (
    <div className="w-full flex flex-col space-y-2 items-center  ">
      {todos.map((todo) => (
        <ListItem id={todo.id} task={todo.task} isActive={todo.isActive} />
      ))}
    </div>
  );
};

export default TodoList;
