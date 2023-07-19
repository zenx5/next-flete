"use client";
export default function BuyNow({ id }) {

    const handlerClick_BuyNow = (event) => {
        event.preventDefault()
        console.log(`handlerClick, BuyNow ${id}`)
    }

    return <button 
        className="flex justify-center w-full text-blue-400 hover:text-blue-500 hover:bg-blue-100 p-2"
        onClick={handlerClick_BuyNow}
        >Comprar ahora</button>
}