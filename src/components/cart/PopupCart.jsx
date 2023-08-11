"use client";
import useProducts from "@/tools/useProducts";
import ItemProducInCart from "./ItemProductInCart"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function PopupCart({ onClose, onClickOut }) {
    const [removed, setRemoved] = useState([])
    const router = useRouter()
    const {products, updateQuantity:update} = useProducts()

    const ref = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (
                !ref.current?.contains(event.target) &&
                !ref.current.parentElement.parentElement.parentElement.contains(event.target)
            ) {
                onClickOut()
            }
        };
        window.addEventListener("mousedown", handleOutSideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref, onClickOut]);

    const removeProduct = id => () => {
        setRemoved( prev => [...prev, id])
        update(id)(0)
    }

    const openCheckout = () => {
        router.push('/confirmar-compra')
        if( onClose ) onClose()
    }

    return <div className="absolute left-0 w-full">
        <div className="flex justify-end mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-0">
            <div className="p-5 bg-white w-2/4 lg:w-1/4 shadow-xl border-2 border-gray-200 h-fit z-20 rounded-xl" ref={ref}>
                <ul className="block divide-y divide-gray-200">
                    {products.filter( product => !removed.includes(product.id) ).map((product) =>
                        <ItemProducInCart
                            key={product.id}
                            compact
                            product={product}
                            quantity={product.quantity}
                            onChange={update(product.id)}
                            onRemove={removeProduct(product.id)}
                    />)}
                </ul>
                <button className="w-full font-bold text-black border border-black p-1 rounded disabled:text-gray-500 disabled:border-gray-500" disabled={products.filter( product => !removed.includes(product.id) ).length===0} onClick={openCheckout}>Ir al Checkout</button>
            </div>
        </div>
    </div>
}