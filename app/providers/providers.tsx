'use client';

import { createContext } from "react";
import { TaskType } from "../lib/definision";
import { SetTaskListType } from "../lib/definision";

type ContextType = {
    tasks: TaskType[],
    categories: string[],
    setTaskList : (a:TaskType[]) => void
}

export const DataContext = createContext<ContextType | null>(null);

export function DataProvider ({tasks, categories, setTaskList, children}:{
    tasks: TaskType[], categories:string[], setTaskList:(a:TaskType[]) => void, children: React.ReactNode}) {

    return(
        <DataContext value={{tasks, categories, setTaskList}}>
            {children}
        </DataContext>
    )
}



export const FnContext = createContext<SetTaskListType | null>(null)

export function FunctionProvider ({setTaskList, children} :
    {setTaskList: SetTaskListType, children: React.ReactNode}) {

        return(
            <FnContext value={setTaskList}>
                {children}
            </FnContext>
        )
    
}