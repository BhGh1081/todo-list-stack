'use client';

import { CalendarIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { taskCheck } from "../lib/action";
import { useState } from "react";
import { DeleteTask, EditTask } from "./button";
import { TaskType } from "../lib/definision";
import EditTaskForm from "./editTask-form";



export default function Tasks({ tasks }: { tasks: TaskType[] }) {

    const [taskList, setTaskList] = useState(tasks);
    const [showEdit, setShowEdit] = useState(false);
    const categories = tasks.map((t) => t.category as string)
    const [id, setId] = useState('');
    const [task, setTask] = useState<TaskType>({ id: '', user_id: '', title: '', description: '', category: '', date: new Date(), completed: false });

    const handlechange = async (id: string) => {

        setTaskList((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t))
        await taskCheck(id);
    }

    const handleClick = (task: TaskType) => {
        setShowEdit(!showEdit)
        setTask(task);
        setId(task.id);
    }

    return (
        <div className='w-full space-y-4 flex transition-all duration-500 ease-in-out'>
            <div className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${showEdit ? 'md:w-1/2 opacity-100 translate-x-0' : 'w-0 opacity-0'}`}>
                {showEdit && <EditTaskForm id={id} categories={categories} task={task} />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showEdit ? 'w-1/2' : 'w-full'}`}>
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
                                        <div className="md:hidden"><EditTask id={task.id} /></div>
                                        <button onClick={() => handleClick(task)} className="hidden md:block">
                                            <PencilSquareIcon className="w-7" />
                                        </button>
                                        <DeleteTask id={task.id} />
                                    </div>
                                    <p className="hidden sm:block absolute right-35 bg-gray-200 px-2 rounded">{task.category}</p>
                                </div>
                                <p className="px-7 text-[14px] text-gray-500 max-w-1/2 truncate hover:intruncate">{task.description}</p>


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

        </div>

    )
}