import { createBrowserClient } from "@supabase/ssr";

// remove this file - No need for supabase auth on client side
export function createClient() {
  console.log(`Supabase Url ${process.env.NEXT_PUBLIC_SUPABASE_URL} and Supabase anon key: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY} on client side`)
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
