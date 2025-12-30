'use client';

import '@/app/ui/globals.css';
import { useState } from "react";
import clsx from "clsx";
import Hambergur from "./hambergurMenu";
import Logo from './logo';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import HomeHambergur from './homeHambergur';

export function Header({ className }: { className?: string }) {

  const [showHambergur, setShowHambergur] = useState(false);


  return (
    <div className="fixed top-0 w-full">
      <div className={clsx('flex relative items-center font-lusitana py-3 px-4 md:pt-30 md:m-4 m-2 rounded-md bg-primary', className)}>
        <div>
          <Logo setShowHambergur={setShowHambergur} />
          <Hambergur showHambergur={showHambergur} setShowHambergur={setShowHambergur}>
            <HomeHambergur />
          </Hambergur>
        </div>
        <Link
          href='/add-task'
          className="absolute right-4 md:bottom-3 text-[20px]">
          <strong className='hidden md:block hover:text-white'>New</strong>
          <PlusIcon className="md:hidden align-self-center w-8 h-8" />
        </Link>
      </div>
    </div>
  )
}

