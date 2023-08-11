"use client";
import { useEffect, useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import PopupCart from './PopupCart';
import Cart from '@/tools/cart.fake';

export default function ButtonCart() {
    const [id, setId] = useState(null)
    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState(0)
    useEffect(()=>{
        if( id===null ) {
            const id = setInterval(()=>{
                const cart = Cart.get()
                setQuantity( prev => cart.index.length )
            },500)
            setId( id )
        }
    },[id])

    const handlerPopup = () => {
        setOpen(prev => !prev)
    }

    return <span>
        <button onClick={handlerPopup} className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
            <span className="ml-2 text-sm font-medium text-white">{quantity}</span>
            <span className="sr-only">items in cart, view bag</span>

        </button>
        {open && <PopupCart onClose={() => setOpen(false)} />}
    </span>
}