import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { LuListTodo } from "react-icons/lu";
import '@/app/ui/globals.css';
import React from "react";
import clsx from "clsx";
import Link from "next/link";

export function ListLogo({className}: {className?: string}) {

    return (
        <div className={clsx('flex items-center font-lusitana py-3 px-4 md:pt-30 rounded-md bg-primary', className)}>
            <div className="flex flex-3 items-center gap-2">
                <Bars3Icon className="block h-9 w-10 md:h-14 md:w-14 md:hidden" />
                <LuListTodo className="hidden h-12 w-12 md:block" />
                <Link href='/'><strong className="text-[28px] md:text-[36px] font-mono text-center">Tasks</strong></Link>
            </div>
        </div>
    )
}

