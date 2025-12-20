'use client';

import { useSession } from "next-auth/react";

export default function SessionTest(){

    const {data: session, status} = useSession();

    if(status === 'loading'){
        return <p>checking login...</p>
    }

    if(!session){
        return <p>yoare not logged in</p>
    }
    console.log(session.user)

    return(
        <p>you are logged in as <strong>{session.user?.email}</strong></p>
    )
}