'use client';

import clsx from "clsx";
import { useEffect, useState } from "react";


export default function Toggle() {

    const [dark, setDark] = useState(false)


    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('them', dark ? 'dark' : 'light')
    },[dark])


    return (
        <div
            onClick={() => setDark(!dark)}
            className={clsx("w-15 h-6 rounded-full relative", dark ? 'bg-cyan-200' : 'bg-gray-300')}>
            <div className={clsx("bg-primary w-7 h-7 rounded-full absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out", 
                dark ? 'translate-x-8' : 'translate-x-0')} />
        </div>
    )
}