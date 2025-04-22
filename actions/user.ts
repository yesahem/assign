"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function Signup(formData: FormData) {
    
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    console.log("Form data: ", formData)
     const supabase = await createClient()

    const { error } = await supabase.auth.signUp(data)
    if (error) {
        redirect('/error')
    }
    console.log("no error in server action ")
    revalidatePath('/', 'layout')
    redirect('/')

}

export async function login(formData: FormData) {
    const supabase = await createClient()
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    const { error } = await supabase.auth.signInWithPassword(data)
    
    if (error) {
      redirect('/error')
    }
    revalidatePath('/', 'layout')
    redirect('/')
    
  }
  
  export async function loginWithGoogle() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider:'google',
        options: {
          redirectTo: 'http://localhost:3000/auth/callback',
        },
      })
      
      console.log("data from google", data)
      console.log("error from google", error)
      if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
      }
  }

