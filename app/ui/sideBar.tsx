'use client';

import '@/app/ui/globals.css';
import { useState } from 'react';
import clsx from 'clsx';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { LogButton } from './button';
import { FaFilter } from "react-icons/fa";
import Modal from './modal';
import CategoryFilter from './categoryFilter';
import DateFilter from './dateFilter';
import Portal from './portal';
import { useContext } from 'react';
import { DataContext } from '../providers/providers';


export function SideBar() {

    const data = useContext(DataContext);


    const [isSelect, setIsSelect] = useState<string>("")
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());

    const handleStatus = (t: string) => {
        params.set('status', t);
        router.push(`${pathname}?${params}`)
        const statusParam = params.get('status');
        setIsSelect(statusParam as string);

    }

    return (
        <div className="md:flex md:flex-1 flex-col w-full">
            <div className="flex flex-row grow md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="flex h-[48px] px-4 items-center bg-gray-50 rounded-md hover:bg-cyan-50 hover:text-primary hover:cursor-pointer"
                    onClick={() => {
                        params.delete('status');
                        router.replace(`${pathname}?${params}`)
                        setIsSelect('')
                    }
                    }>
                    <strong>All</strong>
                </div>
                {
                    ['Completed', 'Pending'].map((t, index) =>
                        <div className={clsx("flex h-[48px] px-4 items-center bg-gray-50 rounded-md hover:bg-cyan-50 hover:text-primary hover:cursor-pointer", { 'bg-teal-50 text-primary': t === isSelect })}
                            key={index}
                            onClick={() => handleStatus(t)}>
                            <strong>{t}</strong>
                        </div>
                    )
                }
                <div className=' h-auto w-full grow rounded-md md:bg-gray-50'></div>
                <div className='md:w-full md:flex md:p-4 rounded-md md:bg-gray-50'>
                    <LogButton className={'hidden md:flex w-full'} />
                    <div
                        onClick={() => setShowModal(!showModal)}
                        className='md:hidden w-full h-[48px] flex bg-gray-50 justify-center items-center px-4 rounded-md'>
                        <strong>Filter</strong>
                        <FaFilter className='w-7 h-5' />
                    </div>
                    {showModal &&
                        <Portal>
                            <Modal setShowModal={setShowModal}>
                                <div className='flex flex-col justify-center space-y-5 items-center p-4'>
                                    <div className='flex flex-col w-[60%]'>
                                        <label>Select Category</label>
                                        <CategoryFilter className='w-full' />
                                    </div>
                                    <div className='flex flex-col w-[60%]'>
                                        <label>Select Date</label>
                                        <DateFilter className='w-full' />
                                    </div>
                                    <button
                                    onClick={() => setShowModal(false)}
                                    className='w-[60%] py-4 mt-5 rounded-md border-2 border-solid border-primary'>Done</button>
                                </div>
                            </Modal>
                        </Portal>
                    }
                </div>
            </div>

        </div>
    )
}