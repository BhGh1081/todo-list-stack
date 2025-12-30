'use client';

import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { deleteTask } from "../lib/action";
import { useSession } from "next-auth/react";
import { SignOutAction } from "../lib/action";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export function SignInButton() {

    return (
        <Link href="/login"
            className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap">
            <strong>Login</strong> <ArrowRightIcon className="w-5" />
        </Link>
    )
}


export function Select({ categories, defaultValue }: { categories: string[], defaultValue: string }) {

    const [value, setValue] = useState('');

    return (
        <div>
            <input
                list="categories"
                name="category"
                placeholder="Enter or Select"
                onChange={(e) => setValue(e.target.value)}
                defaultValue={defaultValue}
                className="bg-input w-full h-[40px] text-sm rounded px-2 focus:outline-primary focus:outline-[1.5px]"
            />
            <datalist
                id="categories">
                {categories.map((t, index) =>
                    <option key={index} value={t}
                        className="w-full bg-input" />)}
            </datalist>
        </div>

    )
}

export function DeleteTask({ id }: { id: string }) {

    const delTaskWithID = deleteTask.bind(null, id)

    return (
        <form action={delTaskWithID} className="h-7">
            <button className="hover:cursor-pointer">
                <TrashIcon className="w-7 sm:w-7" />
            </button>
        </form>
    )
}

export function EditTask({ id }: { id: string }) {


    return (
        <Link href={`/${id}/edit-task`}>
            <PencilSquareIcon className="w-7 sm:w-7 " />
        </Link>
    )
}

export function LogButton({ className = '' }: { className?: string }) {

    const router = useRouter();
    const { data: session, status } = useSession();

    if (!session?.user) {
        return (
            <Link href="/login"
                className={clsx("flex w-full gap-2 h-[47px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-secondry whitespace-nowrap", className)}>
                <strong>Login</strong> <ArrowRightIcon className="w-5" />
            </Link>
        )
    } else {
        return (
            <button
                onClick={async () => {
                    await signOut({ redirect: false });
                    router.refresh();
                }}
                className={clsx('flex h-[47px] space-x-3 justify-center items-center border border-primary border-solid border-3 px-4 py-3 rounded-md transition-colos hover:bg-primary whitespace-nowrap transition-all duration-300 ease-in-out', className)}>
                <strong>Sign Out</strong>
                <ArrowLeftIcon className='w-5' />
            </button>
        )
    }
}