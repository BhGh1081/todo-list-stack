'use client';

import { useContext, useState } from "react";
import { DataContext } from "../providers/dataProvider";
import { TaskType } from "../lib/definision";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function DateFilter({ setTaskList }: { setTaskList: (a: TaskType[]) => void }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const data = useContext(DataContext)
    const tasks = data!.tasks;
    //let date = '';
    const [inputValue, setInputValue] = useState('')

    const filter = (date: string) => {

        setInputValue(date);

        if (!date) {
            setTaskList(tasks);
            return;
        }

        const params = new URLSearchParams(searchParams.toString());
        params.set('date', date)
        router.push(`${pathname}?${params}`)
    }


    return (
        <div>
            <input
                type="date"
                value={inputValue}
                onChange={(e) => filter(e.target.value)}
                className="hidden md:block w-full h-[48px] bg-white text-gray-400 p-3 rounded-md flex-1" />
        </div>
    )
}