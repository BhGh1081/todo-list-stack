'use client';

import { CalendarIcon } from "@heroicons/react/24/outline";
import { taskCheck } from "../lib/action";
import { useState } from "react";
import { DeleteTask, EditTask } from "./button";
import { TaskType } from "../lib/definision";



export default function Tasks({ tasks }: { tasks: TaskType[] }) {

    const [taskList, setTaskList] = useState(tasks);

    const handlechange = async (id: string) => {

        setTaskList((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t))
        await taskCheck(id);
    }


    return (
        <div className="space-y-4">
            {taskList.map((task) => (
                <div
                    key={task.id}
                    className="boeder-b boeder-b-solid border-b-[2px] border-b-gray-300 p-4 pl-8">
                    <div className="space-y-3">
                        <div className="md:relative flex flex-col w-full">
                            <div className="flex justify-between space-between items-center">
                                <div className="flex items-center space-x-2">
                                    <input type="checkBox" name="check" checked={task.completed}
                                        onChange={() => handlechange(task.id)}
                                        className="w-6 h-6 sm:w-5 sm:h-5 rounded-md" />
                                    <strong className="text-[1.1rem]">{task.title}</strong>
                                </div>
                                <div className="flex gap-4 sm:gap-2 items-center">
                                    <EditTask id={task.id} />
                                    <DeleteTask id={task.id} />
                                </div>
                                <p className="hidden sm:block absolute right-35 bg-gray-200 px-2 rounded">{task.category}</p>
                            </div>
                            <p className="px-7 text-[14px] text-gray-500 max-w-1/2 truncate">{task.description}</p>


                        </div>
                        <div className="relative flex items-center px-7">
                            <CalendarIcon className="w-5" />
                            <p className="px-2 w-fit text-green-700">
                                {new Date(task.date).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'short',
                                    weekday: 'short'
                                })}</p>
                            <p className="sm:hidden absolute right-0 bg-gray-200 px-2 rounded">{task.category}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}