import { XMarkIcon } from "@heroicons/react/24/solid";


export default function Modal({ setShowModal, children }: { setShowModal: (a:boolean) => void, children: React.ReactNode }) {


    return (
        <div className="flex justify-center items-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)} />
            <div className="w-[95%] md:w-[60%] bg-gray-200 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg z-100">
                <XMarkIcon
                    onClick={() => setShowModal(false)}
                    className="w-[25px h-[25px] absolute right-15 z-100" />
                    {children}
            </div>
        </div>



    )
}