'use client';

import { LogButton } from "./button";
import Portal from "./portal";
import clsx from "clsx";
import { LuListTodo } from "react-icons/lu"

export default function Hambergur({ showHambergur, setShowHambergur, children }:
    { showHambergur: boolean, setShowHambergur: (a: boolean) => void, children:React.ReactNode}) {


    return (
        <Portal>
            <div
                onClick={() => setShowHambergur(false)}
                className={clsx("absolute inset-0 bg-black/40 z-199", showHambergur ? 'translate-x-0' : '-translate-x-full')}>
            </div>
            <div className={clsx("flex flex-col p-2 absolute top-0 left-0 bg-gray-100 z-200 w-[70%] sm:w-[50%] h-screen shadow-lg transition-all duration-500 ease-in-out",
                showHambergur ? 'translate-x-0' : '-translate-x-full'
            )}>
                <div onClick={() => setShowHambergur(false)} className="flex bg-primary h-[150px] w-full p-2 rounded-md">
                    <div className="flex space-x-2 w-full items-end">
                        <LuListTodo className="w-10 h-10" />
                        <strong className="text-[24px]">Tasks</strong>
                    </div>
                </div>
                <div>
                    {children}
                </div>
                <div className="h-full"></div>
                <LogButton className="w-full" />
            </div>
        </Portal>
    )
}