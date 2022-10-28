import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import supabase from "../supabase";

const TodoInput = () => {
  const [newTask, setNewTask] = useState("");

  async function addTask(e) {
    e.preventDefault();

    if (!newTask) {
      console.log("Error!"); //TODO: Add proper error handling for empty todo input field
      return;
    }
    const { data, error } = await supabase
      .from("todoItems")
      .insert([{ task: newTask.toString() }]);

    setNewTask("");
  }

  return (
    <form
      on
      onSubmit={addTask}
      className="flex my-8 justify-between w-full max-w-sm rounded-sm px-8 py-4 bg-[#393f54] border-b-4 border-blue-500 "
    >
      <input
        className="text-lg align-middle text-[#bfd2ff] bg-[#393f54] focus:outline-none "
        type="text"
        maxLength={25}
        name="taskInput"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        id="taskInput"
      />
      <button type="submit">
        <FontAwesomeIcon
          icon={faPlus}
          className="text-[#7881A1] hover:text-[#bfd2ff]"
        />
      </button>
    </form>
  );
};

export default TodoInput;
