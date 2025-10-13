'use client';

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function SignInButton() {

    return (
        <Link href="/login"
            className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap">
            <strong>Login</strong> <ArrowRightIcon className="w-5" />
        </Link>
    )
}