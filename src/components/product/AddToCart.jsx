"use client";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function AddToCart({ id }) {

    const handlerClick_AddToCart = (event) => {
        event.preventDefault()
        console.log(`handlerClick, AddToCart ${id}`)
        
    }

    return <button className="flex w-full h-0 justify-end px-3" href="#add-to-cart" onClick={handlerClick_AddToCart}>
        <ShoppingBagIcon className="text-right relative top-2.5 h-8 w-8 flex-shrink-0 text-blue-400 bg-white opacity-50 rounded-full p-1 hover:opacity-100 hover:text-blue-500" aria-hidden="true" />
    </button>
}