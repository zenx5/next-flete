'use client'

import { useState } from "react"

export const Reclaim = () => {
    const [reclaimed, setReclaimed] = useState(false);


    const handlerClick = ( event ) => {
        console.log('click')
        setReclaimed( true )
    }

    return (
        <div>
            { reclaimed && 
                <p>este flete esta en reclamacion</p>
            }
            { !reclaimed && 
                <button 
                    className="uppercase rounded-full border border-red-400 px-2 bg-red-300 text-red-700 shadow-md shadow-red-400"
                    onClick={handlerClick}
                >
                    Reclaim
                </button>
            }

        </div>
    )
}