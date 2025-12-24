'use client';

import { TaskType } from "../lib/definision";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { DataContext } from "../providers/providers";

export default function CategoryFilter({className = ''} : {className?: string}) {

        const data = useContext(DataContext);
        const tasks = data!.tasks;
        const categories = data!.categories;
        const setTaskList = data!.setTaskList;
        const searchParams = useSearchParams();
        const pathname = usePathname();
        const router = useRouter();
        

    const handleFilter = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if(!category){
            setTaskList(tasks)
            params.delete('category')
            router.replace(`${pathname}?${params}`)
            return;
        }
        params.set('category', category);
        router.push(`${pathname}?${params}`)

    }

    return (
        <div className={className}>
            <select
                onChange={(e) => handleFilter(e.target.value)}
                className="bg-white w-full h-[48px] rounded-md">
                <option value={''}>All</option>
                {categories.map((category, index) =>
                    <option
                        key={index}
                        value={category}>{category}</option>)}
            </select>
        </div>
    )
}