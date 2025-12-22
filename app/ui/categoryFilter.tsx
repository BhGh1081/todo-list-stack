import { TaskType } from "../lib/definision";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function CategoryFilter({ categories, setTaskList, tasks }:
    { categories: string[], setTaskList: (a: TaskType[]) => void, tasks: TaskType[] }) {

        const searchParams = useSearchParams();
        const pathname = usePathname();
        const router = useRouter();
        

    const handleFilter = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if(!category){
            setTaskList(tasks)
            params.delete('category')
            router.replace(`${pathname}?${params}`)
            return;
        }
        params.set('category', category);
        router.push(`${pathname}?${params}`)
        /* const filterParam = params.get('category');
        const filterd = tasks.filter((task) => task.category === category);
        setTaskList(filterd); */
    }

    return (
        <div className="hidden md:block flex-1">
            <select
                onChange={(e) => handleFilter(e.target.value)}
                className="bg-white w-full h-[48px] rounded-md">
                <option value={''}>All</option>
                {categories.map((category, index) =>
                    <option
                        key={index}
                        value={category}>{category}</option>)}
            </select>
        </div>
    )
}