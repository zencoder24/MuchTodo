import { createClient } from "@supabase/supabase-js";

// NOTE: The url for the supabase table and the anon key are
// both passed as envionment variables. A client is created using
// these two variables
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;

export default createClient(supabaseUrl, supabaseAnonKey);
