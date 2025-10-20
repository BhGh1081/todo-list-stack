'use client';

import Link from "next/link";
import { ArrowRightIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { deleteTask } from "../lib/action";

export function SignInButton() {

    return (
        <Link href="/login"
            className="hidden md:flex gap-2 w-[120px] justify-center items-center text-white bg-primary px-4 py-3 rounded transition-colos hover:bg-purple-400 whitespace-nowrap">
            <strong>Login</strong> <ArrowRightIcon className="w-5" />
        </Link>
    )
}


export function Select({categories}:{categories: string[]}) {

    const [value, setValue] = useState('');
    console.log(categories);

    return (
        <div>
            <input
                list="categories"
                name="category"
                value={value}
                placeholder="Enter or Select"
                onChange={(e) => setValue(e.target.value)}
                className="bg-white w-full h-[40px] text-sm rounded px-2 focus:outline-purple-500 focus:outline-[1.5px]"
            />
            <datalist
                id="categories">
                {categories.map((t, index) =>
                    <option key={index} value={t}
                        className="w-full bg-white" />)}
            </datalist>
        </div>

    )
}

export function DeleteTask({id}:{id: string}){

    const delTaskWithID = deleteTask.bind(null, id)

    return(
        <form action={delTaskWithID} className="h-7">
            <button>
                <TrashIcon className="w-7 sm:w-7" />
            </button>
        </form>
    )
}

export function EditTask({id}: {id:string}) {

    
return(
    <Link href={`/${id}/edit-task`}>
        <PencilSquareIcon className="w-7 sm:w-7 " />
    </Link>
)
}