'use client';

import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { LuListTodo } from "react-icons/lu";
import '@/app/ui/globals.css';
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Portal from "./portal";

export function ListLogo({ className }: { className?: string }) {

    const [showHabergur, setShowHambergur] = useState(false);


    return (
        <div className={clsx('flex items-center font-lusitana py-3 px-4 md:pt-30 rounded-md bg-primary', className)}>
            <div className="flex flex-3 items-center gap-2">
                <Bars3Icon
                    onClick={() => setShowHambergur(true)}
                    className="block h-9 w-10 md:h-14 md:w-14 md:hidden" />
                <LuListTodo className="hidden h-12 w-12 md:block" />
                <Link href='/'><strong className="text-[28px] md:text-[36px] font-mono text-center">Tasks</strong></Link>
            </div>

                <Portal>
                    <div
                        onClick={() => setShowHambergur(false)}
                        className={clsx("absolute inset-0 bg-black/40 z-199", showHabergur ? 'translate-x-0' : '-translate-x-full')}></div>
                    <div className={clsx("absolute top-0 left-0 bg-gray-100 z-200 w-[70%] sm:w-[50%] h-screen shadow-lg transition-all duration-500 ease-in-out",
                        showHabergur ? 'translate-x-0' : '-translate-x-full'
                    )}>
                        <p>Category</p>
                    </div>
                </Portal>
        </div>
    )
}

