"use client"
import { useState } from "react"

export default function Tabs({
    activeColor='blue',
    deactiveColor='gray',
    onChange
}) {
    const [current, setCurrent] = useState(0)

    const items = [
        'Envios disponibles',
        'Favoritos',
        'Mis Envios'
    ]

    return <nav className="flex gap-0 w-full ">
        { items.map( (item, index) => <button
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