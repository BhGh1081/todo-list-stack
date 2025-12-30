'use client';

import clsx from "clsx";
import { useEffect, useState } from "react";


export default function Toggle({ className }: { className?: string }) {

    const [mounted, setMounted] = useState(false);
    const [dark, setDark] = useState(() => {
        if (typeof window === 'undefined') return false
        return localStorage.getItem('theme') === 'dark'
    })


    useEffect(() => {
        setMounted(true);
        const theme = localStorage.getItem('theme');
        setDark(theme === 'dark')
    },[])

    useEffect(() => {
        if (!mounted) return
        localStorage.setItem('theme', dark ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', dark);

    }, [dark, mounted])

    if(!mounted) return null;

    return (
        <div
            onClick={() => setDark(!dark)}
            className={clsx("w-10 h-4 rounded-full relative", dark ? 'bg-cyan-200' : 'bg-gray-300')}>
            <div className={clsx("bg-primary w-5 h-5 rounded-full absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out",
                dark ? 'translate-x-5' : 'translate-x-0')} />
        </div>
    )
}