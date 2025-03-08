"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
    const {data:session} = useSession()
    if(session){
      return (
        <>
        <Image src={session.user?.image} alt="porfile image" height={100} width={100} />
        <h1>Welcom {session.user?.name} to fomo</h1>
        <h1>{session.user?.email}</h1>
        <button onClick={()=>signOut}>Log out</button>
        </>
      )
    }
  return (
    <div>
      <h1>haven't account</h1>
      <button onClick={()=>signIn("google")}>Login with google</button>
    </div>
  );
}
