"use client"
import { useState, useEffect } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import Item from './Item'

export default function MenuItem({ items = [] }) {
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        const listenerCloser = () => {
            if( open ) setOpen( false )
        }
        document.addEventListener('click', listenerCloser)
        return () => document.removeEventListener('click', listenerCloser)
    },[open])

    const handleClick = item => () => {
        if( item?.onClick ) item?.onClick()
        setOpen( false )
    }

    return <div className="relative">
        <button onClick={()=>setOpen(prev=>!prev)}>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {open && <div className="absolute left-[-100px] bg-white border border-slate-300 shadow-md shadow-slate-500 rounded-md z-10 py-4">
            {items.map((item) => (
                <Item
                    key={item.name}
                    icon={<item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />}
                    name={ item.name }
                    href={ item.href }
                    onClick={handleClick(item)}
                />
            ))}
        </div>}
    </div>
}