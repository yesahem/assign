import { getSession } from "@/hooks/getSession";
import { getUser } from "@/hooks/getUser";
import { redirect } from "next/navigation";

export default async function Home() {
  
  const user = await getUser();     // this will return the user object 
  // const session = await getSession()
  // console.log("user session", session)
  console.log("userLogged", user);
  
  if(!user){
    console.log("user not authenticated redirecting")
    // redirect("/login")
  } 
  return <div>
    Notes Taking app
    
    </div>;
}
