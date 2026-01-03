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
      <div className={clsx('flex w-full relative items-center font-lusitana px-4 py-3 md:py-0 md:pt-30 rounded-md bg-primary', className)}>
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
  )
}

