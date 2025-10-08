'use client';

import '@/app/ui/globals.css';
import Login from './log-button';
import { useState } from 'react';
import clsx from 'clsx';


export function SideBar({ categories }:{ categories: string[]}) {

    const [isSelect, setIsSelect] = useState<string>("")

    //const Categories = ['Work', 'Personal']
    return (
        <div className="md:flex flex-col grow gap-2 bg-gray-100">
            <div className="flex md:flex-col gap-2">
                {
                    categories.map((t, index) =>
                        <div className={clsx("flex h-[48px] px-4 items-center bg-gray-50 text-foreground hover:bg-purple-100 hover:text-primary hover:cursor-pointer",{'bg-purple-100 text-primary': t === isSelect})}
                            key={index}
                            onClick={() => setIsSelect(t)}>
                            <strong>{t}</strong>
                        </div>
                    )
                }
            </div>
            <div>
                <Login />
            </div>
        </div>
    )
}