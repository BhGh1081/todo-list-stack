import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { LuListTodo } from "react-icons/lu";
import '@/app/ui/globals.css';
import React from "react";
import clsx from "clsx";

export function ListLogo({className}: {className?: string}) {

    return (
        <div className={clsx('font-lusitana items-center p-4 bg-primary', className)}>
            <div className="flex flex-3 gap-4 items-center">
                <Bars3Icon className="block h-12 w-12 md:hidden" />
                <LuListTodo className="hidden h-9 w-9 md:block" />
                <strong className="text-[26px] font-mono">Tasks</strong>
            </div>
        </div>
    )
}

