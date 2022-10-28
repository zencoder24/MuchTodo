import React from "react";
import ReactDOM from "react-dom";
import { Provider as SupabaseProvider } from "react-supabase";
import App from "./App";
import "./index.css";
import supabase from "./supabase";

//NOTE: In order to use a Supabase client, you need to provide it via the Context API.
//I renamed it to SupabaseProvider for clarity.
//NOTE: The value passed in to the 'value' field below is the created Client in supabase.jsx
ReactDOM.render(
  <React.StrictMode>
    <SupabaseProvider value={supabase}>
      <App />
    </SupabaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
