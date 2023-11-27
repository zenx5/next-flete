"use client"
import { useState } from "react"

export default function Tabs({
    activeColor='blue',
    deactiveColor='gray',
    onChange,
    labels
}) {
    const [current, setCurrent] = useState(0)

    return <nav className="flex gap-0 w-full ">
        { labels.map( (item, index) => <button
            key={`nav-item-${index}`}
            className={
                `${ current===index ?
                    `border-b-2 border-${activeColor}-500 text-${activeColor}-500` :
                    `border-b-2 border-${deactiveColor}-200 text-${deactiveColor}-500 hover:bg-${deactiveColor}-200`}
                    px-4`
            }
            onClick={()=>{
                setCurrent(index)
                if( onChange ) onChange( index )
            }}
            >{item}</button>
        )}
    </nav>

}