"use client";
import { ROUTER_PATH } from '@/tools/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AuctionUp({ id, defaultValue, step }) {
    const router = useRouter()
    const currency = "$ USD"
    const [value, setValue] = useState( defaultValue - step )

    const handlerClickBuyNow = (event) => {
        event.preventDefault()
        // router.push(`${ROUTER_PATH.CHECKOUT}/${id}`)
    }

    const handlerChangeValue = (increment) => () => {
        setValue(prev => prev + increment)

    }

    return <div className="h-fit m-0 p-0 flex flex-row text-indigo-400 border-2 border-indigo-400 rounded-md">
        <span className="flex flex-row items-center">
            <span id="currency" className="w-1/4 text-center border-r border-indigo-200 h-full items-center flex justify-center">{ currency }</span>
            <input
                type="number"
                className="w-2/4 p-3 text-right outline-none"
                placeholder="0.00"
                value={value}
                max={ defaultValue + step }
                onChange={ event => setValue( event.target.value ) }
            />
            <span className="w-1/4 flex flex-col items-center border-l border-indigo-200">
                <button type="button" onClick={handlerChangeValue(step)} disabled={ (defaultValue-step) <= value } className="disabled:bg-white disabled:text-gray-600 font-semibold cursor-pointer border-b border-indigo-200 w-full text-center hover:bg-indigo-100 hover:text-indigo-500">+</button>
                <button type="button" onClick={handlerChangeValue(-step)} className="font-semibold cursor-pointer w-full text-center hover:bg-indigo-100 hover:text-indigo-500">-</button>
            </span>
        </span>
        <button
            className="border-l-2 border-indigo-400 py-3 px-6 hover:bg-indigo-100 hover:text-indigo-500"
            onClick={handlerClickBuyNow}
        >Ofertar</button>
    </div>
}