'use client'

import { useActionState } from "react";
import { addTask } from "../lib/action";
import { Select } from "./button";


interface optionType {
    value: string,
    label: string
}

export default function AddTaskForm({ categories }: { categories: string[] }) {

    const [erMessage, formAction, isPending] = useActionState(addTask, undefined);

    const category: optionType[] = categories.map((t) => ({ value: t, label: t }))


    return (
        <div className="items-center justify-center w-full md:px-20 px-4 rounded-md  bg-gray-200 flex-3">
            <div className="w-full text-center py-8">
                <strong>Add New Task</strong>
            </div>
            <form action={formAction} className="pb-10">
                <div className="flex flex-col mb-6">
                    <label htmlFor="title">Enter new task title <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="title"
                        id="titel"
                        placeholder="Enter Task Title"
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
                        className="text-sm bg-white h-[40px] px-2 rounded focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="category">Select er enter a category</label>
                    <Select categories={categories} defaultValue={''} />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="date">Date of do task</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="text-sm bg-white h-[40px] px-2 rounded focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <button className="w-full bg-primary p-3 md:my-7 rounded-md hover:bg-secondry">Add</button>
            </form>
        </div>
    )
}