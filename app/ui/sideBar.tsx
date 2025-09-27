import { getCategories } from "@/app/lib/action"

export async function SideBar(){

    const Categories = await getCategories('csdcs');
    return(
        <div className="hidden flex md:block botder-solid p-4 bg-gray-100">
            <h1 className="text-foreground font-inter">Categories</h1>
            <ul>
            {
                Categories.map((t, index) => 
                    <li key={index}>{t}</li>
                )
            }
            </ul>
        </div>
    )
}