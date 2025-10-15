'use client';

import { FcGoogle } from "react-icons/fc"
import { useActionState } from "react";
import { authenticate } from "../lib/action";
import { useSearchParams } from "next/navigation";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ListLogo } from "./listLogo";

export default function LoginForm() {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    return (
        <form action={formAction} className="space-y-3" >
            <div className="relative max-w-[400px] flex flex-col gap-10 items-center justify-center rounded-lg bg-gray-50 px-5 sm:px-10 pt-30">
                <ListLogo className="w-full absolute md:pt-0 top-0"/>
                <h1 className="text-foreground text-38px ">Login To Continue</h1>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email" required
                        className="w-full h-[40px] bg-white rounded p-2 mb-2 border border-gray-200 text-sm focus:outline-1" />

                    <input
                        id="password"
                        name="password"
                        type="password"
                        /* minLength={6} */
                        placeholder="Enter Your Password" required
                        className="w-full h-[40px] bg-white rounded p-2 border border-gray-200 text-sm focus:outline-[1px]" />
                </div>
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <div className="flex flex-col gap-12 items-center justify-center">
                    <button aria-disabled={isPending}
                        className="w-full justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 hover:cursor-pointer">
                        Login</button>
                    <div className="flex flex-raw gap-4 justify-center items-center">
                        <FcGoogle className="w-6 h-6" />
                        <h1 className="hover:text-gray-500 hover:cursor-pointer">Login with google</h1>
                    </div>
                    <div aria-live="polite" aria-atomic="true"
                        className="flex h-8 items-end space-x-1">
                        {errorMessage && (
                            <>
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </form>
    )
}