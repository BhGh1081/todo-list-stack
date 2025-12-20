'use client';

import { useEffect, useState } from "react";

export default function Search({data}) {

    const [inputText, setInputText] = useState('');
    const [showList, setShowList] = useState(false);
    const [filterd, setFilterd] = useState([]);

    useEffect(() => {
        const a = data.filter((t) => t.name.toLowerCase().includes(inputText))
        setFilterd(a)
        console.log(filterd)
    },[inputText])

    const filter = (e) => {
        setInputText(e)
        console.log('input text:', inputText)
        setShowList(true);
    }

    return (
        <div>
            <input
                type="text"
                name="search"
                value={inputText}
                placeholder="Search"
                onChange={(e) => filter(e.target.value)} />
            {showList &&
                <div className="absolute bottom-0">
                    <ul>
                        {filterd &&
                        filterd.map((t) => <li key={t.id}>{t.name}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}