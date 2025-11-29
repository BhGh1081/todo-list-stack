'use client';

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function SignInButton() {

    return(
        <Link href="/login"
            className="flex w-full gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-secondry whitespace-nowrap">
            <strong>Login</strong> <ArrowRightIcon className="w-5" />
        </Link>
    )


}