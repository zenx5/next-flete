"use client";
import Cart from '@/tools/cart.fake';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';


export default function AddToCart({ id, enableCount, classNameContainer, label=null, classNameIcon, badge }) {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const value = Cart.quantity(id)
        if( value ) {
            setCount(prev => value)
        }
    },[id, setCount])

    const handlerClick_AddToCart = (event) => {
        event.preventDefault()
        Cart.add(id)
        const value = Cart.quantity(id)
        if( value ) {
            setCount(prev => value)
        }
    }
    
    return <>
        <button className={classNameContainer+" flex-row flex"} href="#add-to-cart" onClick={handlerClick_AddToCart}>
            { label ? label : <ShoppingBagIcon className={classNameIcon} aria-hidden="true" />}
            { ( enableCount && !badge && count>0 ) && <span>({count})</span> }
        </button>
    </>

}