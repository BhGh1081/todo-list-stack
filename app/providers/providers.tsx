import { createContext } from "react";
import { TaskType } from "../lib/definision";
import { SetTaskListType } from "../lib/definision";

type ContextType = {
    tasks: TaskType[],
    categories: string[],
}

export const DataContext = createContext<ContextType | null>(null);

export function DataProvider ({tasks, categories, children}:{
    tasks: TaskType[], categories:string[], children: React.ReactNode}) {

    return(
        <DataContext value={{tasks, categories}}>
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