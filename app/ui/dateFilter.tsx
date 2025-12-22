'use client';

import { useContext } from "react";
import { DataContext } from "../providers/dataProvider";

export default function DateFilter() {

    const data = useContext(DataContext)


    return (
        <div>
            <input type="date" className="hidden md:block w-full h-[48px] bg-white text-gray-400 p-3 rounded-md flex-1" />

            

        </div>
    )
}