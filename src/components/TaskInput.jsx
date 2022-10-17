import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskInput = () => {
  return (
    <div className="flex my-8 justify-between w-full max-w-sm rounded-sm px-8 py-4 bg-[#393f54] border-b-4 border-blue-500 ">
      <input
        className="text-xl align-middle text-[#bfd2ff] bg-[#393f54] focus:outline-none "
        type="text"
        name="taskInput"
        placeholder="Enter a task..."
        id="taskInput"
      />
      <button type="submit">
        <FontAwesomeIcon
          icon={faPlus}
          className="text-[#7881A1] hover:text-[#bfd2ff]"
        />
      </button>
    </div>
  );
};

export default TaskInput;
