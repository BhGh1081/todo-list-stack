'use client';

//import { useSession, signOut } from "next-auth/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function LogButton() {

/*     const { data: session } = useSession();

    if (session?.user?.id) {

        return (
            <button
                onClick={() => signOut({ redirect: false })}
                className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap"
            >
                <strong>sign Out</strong>
                <ArrowRightIcon className="w-5" />
            </button >
        )
    } */

    return(
        <Link href="/login"
            className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap">
            <strong>Login</strong> <ArrowRightIcon className="w-5" />
        </Link>
    )


}