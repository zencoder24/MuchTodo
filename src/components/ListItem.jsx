import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCheck,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import supabase from "../supabase";
const ListItem = ({ id, task, isActive }) => {
  //NOTE: This component is the single instance of all of the
  //TodoItem.

  //The state of the checkbox which will determind if a task has been done or not.
  const [checked, setChecked] = useState(false);

  //Sets if a TodoItem can be edited and update. An input field is displayed if editable
  //is true and a paragraph element is it is false
  const [editable, setEditable] = useState(false);

  //The new edited value the is passed to the database
  const [updatedTask, setUpdatedTask] = useState("");

  //Function that toggles if the task has been done or not.
  const handleClick = () => setChecked(!checked);

  //Deletion from database
  async function handleDelete() {
    const { data, error } = await supabase
      .from("todoItems")
      .delete()
      .eq("id", id);
  }

  //Toggles the isActive state state in the data in database
  async function handleActive() {
    setChecked(!checked);
    const { error } = await supabase
      .from("todoItems")
      .update({ isActive: checked })
      .eq("id", id);
  }

  //While the state is editable, if the user decides not to update
  //the todo with a new value, the user can cancel the acttion
  function handleEditCancel() {
    setEditable(!editable);
    setUpdatedTask("");
  }

  //Fuction that updates the todo in the database.
  //If the user has not entered in a task or if editable
  //is false, the todo cannot be update
  async function handleEdit() {
    setEditable(!editable);

    if (updatedTask == "" && editable == false) {
      //TODO: Display error message if the todo is empty
      return;
    } else {
      const { error } = await supabase
        .from("todoItems")
        .update({ task: updatedTask })
        .eq("id", id);
      setUpdatedTask("");
    }
  }

  return (
    <div className="flex justify-between w-full max-w-sm rounded-md px-8 py-3 bg-[#393f54]">
      <div className="flex space-x-4">
        <input
          type="checkbox"
          className=" accent-teal-300"
          checked={checked}
          onChange={handleActive}
          name="taskItem"
          id="taskItem"
        />
        {editable ? (
          <input
            type="text"
            maxLength={25}
            placeholder={task}
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            className={`${
              checked
                ? "line-through text-slate-500  decoration-slate-500"
                : " text-[#bfd2ff] "
            } text-lg  border-none outline-none active:outline-none`}
          />
        ) : (
          <p
            className={`${
              checked
                ? "line-through text-slate-500  decoration-slate-500"
                : " text-[#bfd2ff] "
            } text-lg`}
          >
            {task}
          </p>
        )}
      </div>

      {!editable ? (
        <div className="text-[#bfd2ff] text-sm flex space-x-2">
          <button
            onClick={handleEdit}
            className=" bg-black rounded-full flex justify-center p-2"
            id="update-button"
          >
            <FontAwesomeIcon icon={faPen} className="hover:text-green-600 " />
          </button>
          <button
            onClick={handleDelete}
            className=" bg-black rounded-full p-2 flex justify-center"
            id="delete-button"
          >
            <FontAwesomeIcon icon={faTrash} className="hover:text-red-600" />
          </button>
        </div>
      ) : (
        <div className="text-[#bfd2ff] text-sm flex space-x-2">
          <button
            onClick={handleEdit}
            className=" bg-green-600 rounded-full flex justify-center p-2"
            id="update-button"
          >
            <FontAwesomeIcon icon={faCheck} className=" " />
          </button>
          <button
            onClick={handleEditCancel}
            className=" bg-red-600 rounded-full p-2 flex justify-center"
            id="cancel-button"
          >
            <FontAwesomeIcon icon={faX} className="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
