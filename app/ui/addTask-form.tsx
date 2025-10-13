'use client'

import { useState } from "react";
import dynamic from "next/dynamic";


interface optionType {
    value: string,
    label: string
}

export default function AddTaskForm({ categories }: { categories: string[] }) {

    const Select = dynamic(() => import('react-select'), { ssr: false });
    const [selectValue, setSelectValue] = useState<optionType | null>(null);

    const category: optionType[] = categories.map((t) => ({ value: t, label: t }))
    console.log('category is:', category);


    return (
        <div className="px-4 flex-3">
            <div className="w-full text-center py-8">
                <strong>Add New Task</strong>
            </div>
            <form>
                <div className="flex flex-col mb-6">
                    <label htmlFor="title">Enter new task title</label>
                    <input
                        type="text"
                        name="title"
                        id="titel"
                        placeholder="Enter Task Title"
                        className="text-sm bg-white h-[40px] rounded px-2 focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="describtion">Write discribtion for task</label>
                    <input
                        type="text"
                        name="description"
                        id="describtion"
                        placeholder="Write Describtion"
                        className="text-sm bg-white h-[40px] px-2 rounded focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="category">Select er enter a category</label>
                    <Select
                        options={category}
                        value={selectValue}
                        onChange={(e) => setSelectValue(e as optionType | null)}
                        placeholder='Select Category'
                        isClearable
                        isSearchable
                        styles={{
                            control: (base, state) => ({
                                ...base,
                                height: 40,
                                borderColor: state.isFocused ? "#7c3aed" : base.borderColor,
                                boxShadow: state.isFocused ? "0 0 0 0.5px #7c3aed" : base.boxShadow,
                                "&:hover": {
                                    borderColor: state.isFocused ? "#7c3aed" : base.borderColor,
                                },
                            })}}
                            />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="date">Date of do task</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="text-sm bg-white h-[40px] px-2 rounded focus:outline-purple-500 focus:outline-[1.5px]" />
                </div>
                <button className="w-full bg-primary p-3">Add</button>
            </form>
        </div>
    )
}