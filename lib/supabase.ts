import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const isPlaceholder = supabaseUrl.includes('placeholder.supabase.co') || !supabaseUrl || !supabaseAnonKey;

if (isPlaceholder) {
  console.warn('Supabase URL or Anon Key is missing or set to placeholder. Please check your environment variables in .env.local.');
}

// All Supabase calls should fail silently with console warning during development if not connected
export const supabase = createClient(
  isPlaceholder ? 'https://placeholder.supabase.co' : supabaseUrl,
  isPlaceholder ? 'placeholder_key' : supabaseAnonKey
);

// Helper for conditional Supabase usage
export const isSupabaseConnected = !isPlaceholder;
