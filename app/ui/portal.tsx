import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({children}:{children: React.ReactNode}){

    const [amount, setAmount] = useState(false);

    useEffect(() => {
        setAmount(true);
    },[])

    if(!amount) return null;

    return createPortal(children, document.body);
}