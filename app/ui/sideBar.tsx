'use client';

import '@/app/ui/globals.css';
import { useState } from 'react';
import clsx from 'clsx';
import SignInButton from './signInButton';
import { SignOutAction } from '../lib/action';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export function SideBar({ isLogedIn }: { isLogedIn: boolean }) {

    const [isSelect, setIsSelect] = useState<string>("")
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());

    const handleStatus = (t: string) => {
        setIsSelect(t);
        params.set('status', t);
        router.replace(`${pathname}?${params}`)

    }

    return (
        <div className="md:flex md:flex-1 flex-col w-full">
            <div className="flex flex-row grow md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="flex h-[48px] px-4 items-center bg-gray-50 text-foreground rounded-md hover:bg-cyan-50 hover:text-primary hover:cursor-pointer"
                            onClick={() => { 
                                params.delete('status');
                                router.replace(`${pathname}?${params}`)
                                setIsSelect('')}
                            }>
                            <strong>All</strong>
                        </div>
                {
                    ['Completed', 'Pending'].map((t, index) =>
                        <div className={clsx("flex h-[48px] px-4 items-center bg-gray-50 text-foreground rounded-md hover:bg-cyan-50 hover:text-primary hover:cursor-pointer", { 'bg-teal-50 text-primary': t === isSelect })}
                            key={index}
                            onClick={() => handleStatus(t)}>
                            <strong>{t}</strong>
                        </div>
                    )
                }
                <div className=' h-auto w-full grow rounded-md md:bg-gray-50'></div>
                <div className='md:w-full md:flex md:p-4 rounded-md md:bg-gray-50'>
                    {isLogedIn ?
                        <form action={SignOutAction} className='w-full'>
                            <button className='flex w-full h-[47px] space-x-3 justify-center items-center border border-primary border-solid border-3 px-4 py-3 rounded-md transition-colos hover:bg-primary whitespace-nowrap transition-all duration-300 ease-in-out'>
                                <strong>Sign Out</strong>
                                <ArrowLeftIcon className='hidden md:block w-5' />
                            </button>
                        </form> : <SignInButton />}
                </div>
            </div>

        </div>
    )
}