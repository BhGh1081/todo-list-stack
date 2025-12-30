'use client';

import clsx from "clsx";
import { useEffect, useState } from "react";


export default function Toggle({className}: {className?: string}) {

    const theme = localStorage.getItem('theme')
    const [dark, setDark] = useState(() => {
        if(theme === 'dark') return true
        return false;
    })


    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    },[dark])


    return (
        <div
            onClick={() => setDark(!dark)}
            className={clsx("w-10 h-4 rounded-full relative", dark ? 'bg-cyan-200' : 'bg-gray-300')}>
            <div className={clsx("bg-primary w-5 h-5 rounded-full absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out", 
                dark ? 'translate-x-5' : 'translate-x-0')} />
        </div>
    )
}