'use client';

import Tasks from "./tasks";
import Search from "./search";
import CategoryFilter from "./categoryFilter";;
import DateFilter from "./dateFilter";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "@/app/providers/Providers";


export default function Main() {

    const data = useContext(DataContext);
    const tasks = data!.tasks;

    const [taskList, setTaskList] = useState(tasks);


    return (
        <div className="flex-3 felx rounded">
            <div className="md:flex md:space-x-2">
                <Search setTaskList={setTaskList} />
                <CategoryFilter className="hidden md:block flex-1" />
                <DateFilter />
            </div>
            {tasks ?
                <Tasks taskList={taskList} setTaskList={setTaskList} /> :
                <div className="flex flex-col space-y-6 items-center h-full justify-center">
                    <img
                        src='image/no-data.svg'
                        className="w-80"
                    />
                    <strong>No Tasks Yet</strong>
                </div>
            }
        </div>
    )
}