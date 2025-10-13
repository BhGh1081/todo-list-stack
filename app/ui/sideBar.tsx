'use client';

import '@/app/ui/globals.css';
import { useState } from 'react';
import clsx from 'clsx';
import LogButton from './log-button';


export function SideBar({ categories }:{ categories: string[]}) {

    const [isSelect, setIsSelect] = useState<string>("")

    //const Categories = ['Work', 'Personal']
    return (
        <div className="md:flex flex-1 flex-col justify-space-between bg-gray-100 gap-2 pb-10">
            <div className="flex flex-1 md:flex-col gap-2">
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
                <LogButton />
            </div>
        </div>
    )
}