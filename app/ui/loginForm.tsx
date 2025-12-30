'use client';

import { FcGoogle } from "react-icons/fc"
import { useActionState } from "react";
import { authenticate } from "../lib/action";
import { useSearchParams } from "next/navigation";
import { ArrowLeftIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Header } from "./header";
import { LuListTodo } from "react-icons/lu";
import Link from "next/link";
import '@/app/ui/globals.css';

export default function LoginForm() {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    return (
        <form action={formAction}>
            <div className="flex flex-col gap-10 items-center justify-center rounded-lg bg-theme">
                {/* <Header className="w-full" /> */}
                <div className="flex w-full h-[150px] rounded-md items-end p-4 bg-primary gap-2">
                    <LuListTodo className="h-12 w-12" />
                    <Link href='/'><strong className="text-[28px] md:text-[36px] font-mono text-center">Tasks</strong></Link>
                </div>
                <div className="flex flex-col max-w-[400px] space-y-15 items-center px-10">
                    <h1 className="text-38px ">Login To Continue</h1>
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter Your Email" required
                            className="w-full h-[40px] bg-input rounded p-2 mb-2 border border-gray-200 text-sm focus:outline-1" />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            /* minLength={6} */
                            placeholder="Enter Your Password" required
                            className="w-full h-[40px] bg-input rounded p-2 border border-gray-200 text-sm focus:outline-[1px]" />
                    </div>
                    <input type="hidden" name="redirectTo" value={callbackUrl} />
                    <div className="flex flex-col gap-12 items-center justify-center">
                        <button aria-disabled={isPending}
                            className="flex gap-5 text-white bg-primary px-6 py-3 rounded transition-colos hover:bg-secondry hover:cursor-pointer">
                            Login
                            <ArrowLeftIcon className="w-6" /></button>
                        <div className="flex flex-raw gap-4 justify-center items-center">
                            <FcGoogle className="w-6 h-6" />
                            <h1 className="hover:text-primary hover:cursor-pointer">Login with google</h1>
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
            </div>
        </form>
    )
}