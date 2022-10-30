import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import supabase from "../supabase";

const TodoInput = () => {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(false);

  async function addTask(e) {
    e.preventDefault();

    if (!newTask) {
      setError(true);
      return;
    }
    const { data, error } = await supabase
      .from("todoItems")
      .insert([{ task: newTask.toString() }]);
    setError(false);
    setNewTask("");
  }

  return (
    <>
      <form
        on
        onSubmit={addTask}
        className="flex mt-8  justify-between w-full max-w-sm rounded-sm px-8 py-4 bg-[#393f54] border-b-4 border-blue-500 focus-within:outline-none "
      >
        <input
          className="text-lg align-middle text-[#bfd2ff] bg-[#393f54] border-none focus:ring-0"
          type="text"
          maxLength={25}
          name="taskInput"
          placeholder="Add a new todo..."
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
      {error ? (
        <p class="mt-2 text-sm text-red-600 dark:text-red-500 mb-8">
          <span class="font-medium">
            Field cant be blank Please Enter a todo.
          </span>
        </p>
      ) : (
        <div className="mb-8"></div>
      )}
    </>
  );
};

export default TodoInput;
