'use client';

import { SessionProvider } from "next-auth/react";

export function SeProvider({children}: {children: React.ReactNode}){

    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}