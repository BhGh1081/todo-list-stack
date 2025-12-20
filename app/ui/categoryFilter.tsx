export default function CategoryFilter({selectList}: {selectList: string[]}){


    return(
        <div className="hidden md:block flex-1">
            <select className="bg-white w-full h-[48px] rounded-md">
                <option>Category</option>
                {selectList.map((item, index) => 
                <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}