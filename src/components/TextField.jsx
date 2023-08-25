"use client";

import { useState } from "react";

export default function TextField( props ) {
    const { label, type='text', helperText } = props
    const [visible, toggleVisible] = useState(false)

    return <div className="flex flex-col">
        <span className="left-4 top-3 relative w-fit bg-white px-2 text-blue-500">{label}</span>
        { type?.toLowerCase()==='password' && <span className="flex flex-row border border-blue-500 rounded">
            <input type={visible ? 'text' : 'password'} className="w-fit outline-none p-3 rounded" {...props?.input}/>
            <button type="button" onClick={()=>toggleVisible(prev =>!prev)} className="pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                    { visible ? <>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </>:
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    }
                </svg>
            </button>
        </span>}
        { type.toLowerCase()!=='password' && <span className="border border-blue-500 rounded">
            <input type={type} className="w-full outline-none p-3 rounded" {...props.input}/>
        </span>}
        <span className="text-xs px-2 pt-1 text-gray-500">{helperText}</span>
    </div>
}