'use server'

import { signOut } from "../auth";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default async function SignOut() {

    return (
        <form action={async () => {
            signOut({ redirectTo: '/' })
        }}>
            <button
                className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap" >
                <strong>Log Out</strong>
                <ArrowRightIcon className="w-5" />
            </button>
        </form>
    )
}