/* 'use client';

import { useSession } from "next-auth/react";


export default function Card(){
    const session = useSession();
    const a = session.data?.user?.id;
    console.log(a);

    return(
        <div>{a}</div>
    )
} */