import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

export default function Search() {


    return (
        <div className="relative flex-3">
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full h-[48px] bg-white text-gray-500 rounded-md p-3" />
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
    )
}