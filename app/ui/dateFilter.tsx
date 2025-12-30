'use client';

import { useContext, useState } from "react";
import { DataContext } from "../providers/providers";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function DateFilter({className = ''} : {className?: string}) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const data = useContext(DataContext)
    const tasks = data!.tasks;
    const [inputValue, setInputValue] = useState('')

    const filter = (date: string) => {

        const params = new URLSearchParams(searchParams.toString());
        setInputValue(date);

        if (!date) {
            params.delete('date');
            router.push(`${pathname}?${params}`)
            return;
        }

        
        params.set('date', date)
        router.push(`${pathname}?${params}`)
    }


    return (
        <div className={className}>
            <input
                type="date"
                value={inputValue}
                onChange={(e) => filter(e.target.value)}
                className="w-full h-[48px] bg-input text-gray-400 p-3 rounded-md flex-1" />
        </div>
    )
}