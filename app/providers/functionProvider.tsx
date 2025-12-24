import React, { createContext, useState } from "react";
import { SetTaskListType } from "../lib/definision";


const FnContext = createContext<SetTaskListType | null>(null)

export default function FunctionProvider ({setTaskList, children} :
    {setTaskList: SetTaskListType, children: React.ReactNode}) {

        return(
            <FnContext value={setTaskList}>
                {children}
            </FnContext>
        )
    
}