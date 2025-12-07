'use client';

import '@/app/ui/globals.css';
import { useState } from 'react';
import clsx from 'clsx';
import SignInButton from './signInButton';
import SignOutAction from './signOutButton';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export function SideBar({ isLogedIn }: { isLogedIn: boolean }) {

    const [isSelect, setIsSelect] = useState<string>("");
    const status = ['All', 'Completed', 'Pending'];
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();


    const handleClick = (t: string) => {
        setIsSelect(t);
        const params = new URLSearchParams(searchParams.toString());
        params.set('status', t);
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="md:flex md:flex-1 flex-col w-full">
            <div className="flex flex-row grow md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {
                    status.map((t, index) =>
                        <div className={clsx("flex h-[48px] px-4 items-center bg-gray-50 text-foreground rounded-md hover:bg-cyan-50 hover:text-primary hover:cursor-pointer", { 'bg-teal-50 text-primary': t === isSelect })}
                            key={index}
                            onClick={() => handleClick(t)} >
                            <strong>{t}</strong>
                        </div>
                    )
                }
                <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>
                <div className='hidden w-full md:flex p-4 rounded-md bg-gray-50'>
                    {isLogedIn ?
                        <form action={SignOutAction} className='w-full'>
                            <button className='flex w-full space-x-3 justify-center items-center border border-primary border-solid border-3 px-4 py-3 rounded-md transition-colos hover:bg-primary whitespace-nowrap transition-all duration-300 ease-in-out'>
                                <strong>Sign Out</strong>
                                <ArrowLeftIcon className='w-5' />
                            </button>
                        </form> : <SignInButton />}
                </div>
            </div>

        </div>
    )
}