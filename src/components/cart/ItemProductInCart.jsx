import { useState } from "react"
import QuantityBubble from "../QuantityBubble"

export default function ItemProducInCart({ product, quantity, onChange, onRemove }) {

    const handlerChangeQuantity = (value) => {
        if( onChange ) onChange(value)
    }

    return <li className="flex space-x-6 py-6">
        <img
            src={product.images?.at(0)?.src}
            alt={product.images?.at(0)?.alt}
            className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
        />
        <div className="flex-auto">
            <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                <div className="flex-auto space-y-1 text-sm font-medium">
                    <h3 className="text-gray-900">
                        <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="text-gray-900">{product.price}</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <QuantityBubble min={0} onChange={handlerChangeQuantity} value={quantity}/>
                    <div className="flex border-l border-gray-300 pl-4">
                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500" onClick={onRemove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </li>
}

