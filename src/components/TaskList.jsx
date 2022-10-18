import React from "react";
import ListItem from "./ListItem";

const TaskList = () => {
  return (
    <div className="w-full flex flex-col space-y-2 items-center  ">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default TaskList;
