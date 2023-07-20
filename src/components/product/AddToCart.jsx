"use client";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export default function AddToCart({ id, enableCount, classNameContainer, label=null, classNameIcon }) {
    const [count, setCount] = useState(2)
    const handlerClick_AddToCart = (event) => {
        event.preventDefault()
        console.log(`handlerClick, AddToCart ${id}`)
        
    }
    
    return <button className={classNameContainer+" flex-row flex"} href="#add-to-cart" onClick={handlerClick_AddToCart}>
        { label ? label : <ShoppingBagIcon className={classNameIcon} aria-hidden="true" />}
        { (enableCount && count>0 ) && <span>({count})</span> }
    </button>
}