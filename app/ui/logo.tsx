import { Bars3Icon} from "@heroicons/react/24/solid";
import { LuListTodo } from "react-icons/lu";
import Link from "next/link";

export default function Logo({setShowHambergur}: {setShowHambergur: (a:boolean) => void}) {


    return (
        <div className="flex flex-3 items-center gap-2">
            <Bars3Icon
                onClick={() => setShowHambergur(true)}
                className="block h-9 w-10 md:h-14 md:w-14 md:hidden" />
            <LuListTodo className="hidden h-12 w-12 md:block" />
            <Link href='/'><strong className="text-[28px] md:text-[36px] font-mono text-center">Tasks</strong></Link>
        </div>
    )
}