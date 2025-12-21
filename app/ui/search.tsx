'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TaskType } from "../lib/definision";
import { useRouter, usePathname } from "next/navigation";


export default function Search({ tasks, setTaskList }: { tasks: TaskType[], setTaskList: (tasks: TaskType[]) => void }) {

    const router = useRouter();
    const pathname = usePathname();

    const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        router.replace(`${pathname}`)
        const search = e.target.value;
        const filtered = tasks.filter((t) => t.title.toLowerCase().includes(search))
        setTaskList(filtered);
    }


    return (
        <div className="relative flex-3">
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                onChange={(e) => filter(e)}
                className="w-full h-[48px] bg-white text-gray-500 rounded-md p-3 focus:outline-none focus:border-2 focus:border-gray-200" />
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
    )
}