'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { DataContext } from "../providers/providers";

export default function CategoryFilter({className = ''} : {className?: string}) {

        const data = useContext(DataContext);
        const categories = data!.categories;
        const searchParams = useSearchParams();
        const pathname = usePathname();
        const router = useRouter();
        

    const handleFilter = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        console.log('category:', category)

        if(!category){
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
                className="bg-input w-full h-[48px] rounded-md focus:outline-0 p-2">
                <option value={''}>All</option>
                {categories.map((category, index) =>
                    <option
                        key={index}
                        value={category}>{category}</option>)}
            </select>
        </div>
    )
}