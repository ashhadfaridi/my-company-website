import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only initialize Supabase if credentials are available
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Type for contact form submissions
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  company?: string | null
  project_type: string
  timeline: string
  message: string
  created_at?: string
}
