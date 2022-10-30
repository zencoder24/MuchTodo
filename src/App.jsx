import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ListType from "./components/ListType";
import { useState, useEffect, useCallback } from "react";
import supabase from "./supabase";
import { useRealtime, useFilter } from "react-supabase";

function App() {
  //NOTE: To be able to use the the react-supabase package, I had to downgrade from React 18 to React
  //17. I also had to downgrade the supabase package.

  //NOTE:Using useRealtime from the react-supabase package, I am able to update my components live and
  //without the need for reloading. (https://react-supabase.vercel.app/)

  //TODO: Find out what reexecute does....
  const [{ data: todos, error, fetching }, reexecute] =
    useRealtime("todoItems");

  return (
    <div className=" bg-gradient-to-br from-[#232526] to-[#414245] flex flex-col items-center min-h-screen p-16 ">
      <Heading />
      <TodoInput />
      <TodoList todos={todos} error={error} fetching={fetching} />
    </div>
  );
}

export default App;
