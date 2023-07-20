"use client";
export default function BuyNow({ id, className }) {

    const handlerClick_BuyNow = (event) => {
        event.preventDefault()
        console.log(`handlerClick, BuyNow ${id}`)
    }

    return <button 
        className={className}
        onClick={handlerClick_BuyNow}
        >Comprar ahora</button>
}