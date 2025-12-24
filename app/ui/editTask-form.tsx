import { Select } from "@/app/ui/button";
import { TaskType } from "../lib/definision";
import { updateTask } from "../lib/action";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../providers/providers";


export default function EditTaskForm({categories, task} : {categories: string[], task: TaskType}) {
    

    return (
        <div className="w-full h-full p-4 bg-gray-200">
            <div className="w-full text-center pb-8 pt-5">
                <strong>Edit task</strong>
            </div>
            <form action={updateTask}>
                <div className="flex flex-col mb-6">
                    <label htmlFor="title">Enter new task title <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="title"
                        id="titel"
                        placeholder="Enter Task Title"
                        defaultValue={task.title}
                        required
                        className="text-sm bg-white h-[40px] rounded px-2 focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="description">Write discribtion for task</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Write Description"
                        defaultValue={task.description}
                        className="text-sm bg-white h-[40px] px-2 rounded focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="category">Select er enter a category</label>
                    <Select categories={categories} defaultValue={task.category} />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="date">Date of do task</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        defaultValue={new Date(task!.date).toISOString().split('T')[0]}
                        className="text-sm bg-white h-[40px] px-2 rounded focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <input type="hidden" name="id" value={task.id} />
                <div className="flex gap-2">
                <button className="w-full bg-primary p-3">Edit</button>
                <Link href={'/'} className="md:hidden w-full bg-primary p-3 text-center">Cancle</Link>
                </div>
            </form>
        </div>
    )
}