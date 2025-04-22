import { createClient } from "@/utils/supabase/server";

export async function getSession() {
    const { auth } = await createClient();
    const session = await auth.getSession();
  
    if (session.error) {
      console.log("error occured while getting user session")
      return null;
    }
    //return user
    return session.data.session;
  }
  