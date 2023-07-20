"use client";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function AddToCart({ id, classNameContainer, label, classNameIcon }) {

    const handlerClick_AddToCart = (event) => {
        event.preventDefault()
        console.log(`handlerClick, AddToCart ${id}`)
        
    }
    
    return <button className={classNameContainer} href="#add-to-cart" onClick={handlerClick_AddToCart}>
        { label ? label : <ShoppingBagIcon className={classNameIcon} aria-hidden="true" />}
    </button>
}