import { useState } from "react";
import TaskInput from "./components/TaskInput";
import Heading from "./components/Heading";
import ListItem from "./components/ListItem";
import TaskList from "./components/TaskList";
import ListType from "./components/ListType";

function App() {
  return (
    <div className=" bg-gradient-to-br from-[#232526] to-[#414245] flex flex-col items-center min-h-screen p-16 ">
      <Heading />
      <TaskInput />
      <TaskList />
      <ListType />
    </div>
  );
}

export default App;
