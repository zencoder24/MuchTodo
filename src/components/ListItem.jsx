import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ListItem = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  return (
    <div className="flex justify-between w-full max-w-sm rounded-md px-8 py-3 bg-[#393f54]">
      <div className="flex space-x-4">
        <input
          type="checkbox"
          className=" accent-teal-300"
          onClick={handleClick}
          checked={checked}
          name="taskItem"
          id="taskItem"
        />
        <p
          className={`${
            checked ? "line-through text-slate-500  decoration-slate-500" : ""
          } text-[#bfd2ff] text-lg `}
        >
          Feed the dog
        </p>
      </div>
      <div className="text-[#bfd2ff] text-sm flex space-x-2">
        <div className=" bg-black rounded-full flex justify-center p-2">
          <FontAwesomeIcon icon={faPen} className="hover:text-green-600 " />
        </div>
        <div className=" bg-black rounded-full p-2 flex justify-center">
          <FontAwesomeIcon icon={faTrash} className="hover:text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
