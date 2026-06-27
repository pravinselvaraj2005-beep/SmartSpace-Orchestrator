import { createClient } from '@supabase/supabase-js';

// Vite uses import.meta.env to access environment variables securely
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create and export the database client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
