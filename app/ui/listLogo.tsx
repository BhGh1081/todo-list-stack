import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { LuListTodo } from "react-icons/lu";
import '@/app/globals.css';

export function ListLogo() {

    return (
        <div className='font-lusitana flex items-center p-4 bg-primary'>
            <div className="flex flex-3 gap-4 items-center">
                <Bars3Icon className="block h-12 w-12 md:hidden" />
                <LuListTodo className="hidden h-9 w-9 md:block" />
                <strong className="text-[24px] font-inter">Tasks</strong>
            </div>
            <div>
                <PlusIcon className="w-8 h-8" />
            </div>
        </div>
    )
}

