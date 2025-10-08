'use client';

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";



export default function Login() {

    const { data: session, status } = useSession();
    console.log("Session:", session, "Status:", status);

    if (session) return (
        <button
            onClick={() => signOut({redirectTo: '/'})}
            className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap" >
            <strong>Log Out</strong>
            <ArrowRightIcon className="w-5" />
        </button>
    )

    return (
        <div>
            <Link href={'/login'} className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap">
                <strong>Login</strong> <ArrowRightIcon className="w-5" />
            </Link>
        </div>
    )
}