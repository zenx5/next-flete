"use client";

import { useState } from "react";


export default function Card({ title, hideable, height, children, className }) {
    const [isVisible, toggleVisibility] = useState(true)
    const classContent = hideable ? `w-full transition-[height] ease-linear duration-700 delay-100 overflow-hidden` : 'w-full h-auto'

    return <div className={"p-4 flex flex-col items-start bg-white rounded-lg shadow-lg shadow-gray-400 " + className}>
        <span className="flex flex-row w-full justify-center">
            <h2 className="font-bold text-center text-gray-800 mr-4">{title}</h2>
            {hideable && <button onClick={()=>toggleVisibility(!isVisible)}>
            { 
                isVisible ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            }
            </button>}

        </span>
        <span className={classContent} style={{ height: isVisible ? `${height}px` : '0px' }}>
            { children }
        </span>
    </div>
}