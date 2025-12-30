import Toggle from "./toggle"

export default function HomeHambergur() {

    return (
        <div className="px-2">
            <div className="flex pt-10 pb-5 gap-4 items-center justify-between border-b-2 border-b-gray-200">
                <strong>Dark Mode</strong>
                <Toggle />
            </div>
            <div>
                <p className="pt-5"><strong>Seting</strong></p>
            </div>
        </div>
    )
}