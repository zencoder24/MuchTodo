import React from "react";

const ListType = ({ setActiveList }) => {
  return (
    <div className="bg-[#393f54] py-3 text-[#bfd2ff] rounded-md justify-center space-x-6 flex my-4 max-w-sm  w-full">
      <button
        className="font-semibold hover:cursor-pointer focus:text-blue-500"
        onClick={setActiveList(true)}
      >
        All
      </button>
      <button
        className="font-semibold hover:cursor-pointer focus:text-blue-500"
        onClick={setActiveList(true)}
      >
        Active
      </button>
      <button
        className="font-semibold  hover:cursor-pointer focus:text-blue-500"
        onClick={setActiveList(false)}
      >
        Completed
      </button>
    </div>
  );
};

export default ListType;
