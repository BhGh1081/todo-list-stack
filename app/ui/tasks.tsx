'use client';

import { CalendarIcon, PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { taskCheck } from "../lib/action";
import { useEffect, useState } from "react";
import { DeleteTask, EditTask } from "./button";
import { TaskType, CategoryContextType } from "../lib/definision";
import EditTaskForm from "./editTask-form";
import { useSearchParams } from "next/navigation";
import Modal from "./taskModal";
import ModalPortal from "./modalPortal";
import Search from "./search";
import CategoryFilter from "./categoryFilter";
import { createContext } from "react";




export default function Tasks({ tasks, categories }: { tasks: TaskType[], categories: string[] }) {

    const [taskList, setTaskList] = useState(tasks);
    const [showEdit, setShowEdit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [task, setTask] = useState<TaskType>({ id: '', user_id: '', title: '', description: '', category: '', date: new Date(), completed: false });

    const searchParams = useSearchParams();
    const status = searchParams.get('status');



    useEffect(() => {
        fetch(`/api/tasks?status=${status}`)
            .then((res) => res.json())
            .then((data) => setTaskList(data));
    }, [status])


    const handleChecked = async (id: string) => {

        setTaskList((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t))
        await taskCheck(id);
    }

    const edit = (task: TaskType) => {
        setShowEdit(!showEdit)
        setTask(task);
    }

    return (
        <div className='w-full h-full space-y-2 flex flex-col transition-all duration-500 ease-in-out'>
            <div className="md:flex md:space-x-2">
                <Search tasks={tasks} setTaskList={setTaskList} />
                <CategoryFilter selectList={categories} />
                <input type="date" className="hidden md:block w-full h-[48px] bg-white text-gray-400 p-3 rounded-md flex-1" />
            </div>
            <div className="flex grow">
                <div className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${showEdit ? 'bg-gray-50 md:w-1/2 opacity-100 translate-x-0' : 'w-0 opacity-0'}`}>
                    {showEdit && <EditTaskForm categories={categories} task={task} />}
                </div>
                <div className={`bg-gray-50 grow overflow-hidden transition-all duration-500 ease-in-out hover:cursor-pointer ${showEdit ? 'w-1/2' : 'w-full'}`}>
                    {taskList.map((task) => (
                        <div
                            key={task.id}
                            className="boeder-b boeder-b-solid border-b-[2px] border-b-gray-300 p-4 pl-8">
                            <div className="space-y-3">
                                <div className="md:relative flex flex-col w-full">
                                    <div className="flex justify-between space-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <input type="checkBox" name="check" checked={task.completed}
                                                onChange={() => handleChecked(task.id)}
                                                className="w-6 h-6 sm:w-5 sm:h-5 rounded-md" />
                                            <strong onClick={() => {
                                                setShowModal(true);
                                                setTask(task)
                                            }} className="text-[1.1rem]">{task.title}</strong>
                                        </div>
                                        <div className="flex gap-4 sm:gap-2 items-center">
                                            <div className="md:hidden"><EditTask id={task.id} /></div>
                                            <button onClick={() => edit(task)} className="hidden md:block">
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
            {showModal &&
                <ModalPortal>
                    <div className="flex justify-center items-center">
                        <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)} />
                        <div className="w-full h-[60%] md:w-[60%] md:h-[70%] bg-gray-100 px-10 pt-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg z-100">
                            <XMarkIcon
                                onClick={() => setShowModal(false)}
                                className="w-[25px h-[25px] absolute right-15 z-100" />
                            <Modal task={task} categories={categories} />
                        </div>
                    </div>
                </ModalPortal>
            }
        </div>
    )
}