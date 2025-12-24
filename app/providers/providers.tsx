<<<<<<< HEAD
=======
'use client';

>>>>>>> parent of c692358 (Revert "before add main, commit with error")
import { createContext } from "react";
import { TaskType } from "../lib/definision";
import { SetTaskListType } from "../lib/definision";

type ContextType = {
    tasks: TaskType[],
    categories: string[],
<<<<<<< HEAD
=======
    setTaskList : (a:TaskType[]) => void
>>>>>>> parent of c692358 (Revert "before add main, commit with error")
}

export const DataContext = createContext<ContextType | null>(null);

<<<<<<< HEAD
export function DataProvider ({tasks, categories, children}:{
    tasks: TaskType[], categories:string[], children: React.ReactNode}) {

    return(
        <DataContext value={{tasks, categories}}>
=======
export function DataProvider ({tasks, categories, setTaskList, children}:{
    tasks: TaskType[], categories:string[], setTaskList:(a:TaskType[]) => void, children: React.ReactNode}) {

    return(
        <DataContext value={{tasks, categories, setTaskList}}>
>>>>>>> parent of c692358 (Revert "before add main, commit with error")
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