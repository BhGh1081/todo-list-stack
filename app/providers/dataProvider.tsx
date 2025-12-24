'use client';

import React, { createContext, useState } from "react";
import { TaskType } from "../lib/definision";

type ContextType = {
    tasks: TaskType[],
    categories: string[]
}

export const DataContext = createContext<ContextType | null>(null);

export function DataProvider ({tasks, categories, children}:
     {tasks: TaskType[], categories:string[], children: React.ReactNode}) {

    //const [taskContext, setTaskContext] = useState<TaskType[]>(tasks);

    return(
        <DataContext value={{tasks, categories}}>
            {children}
        </DataContext>
    )
}