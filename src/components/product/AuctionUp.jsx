"use client";
import { useEffect, useState } from 'react';
import { actionSave } from '@/tools/firebase/actions';

export default function AuctionUp({ id, auctions, step, initialValue, user }) {
    const currency = "$ USD"
    const [value, setValue] = useState( 0 )
    const [limit, setLimit] = useState( 0 )
    useEffect(()=>{
        if( auctions.length>0 && value===0 ) {
            const max = auctions.reduce( (element,acc) => element.date > acc.date ? element : acc, { date: 0 } )
            if( max.date > 0 ) {
                setValue( prev => max.mount - step )
                setLimit( prev => max.mount )
            } else {
                setValue( prev => initialValue - step )
                setLimit( prev => initialValue )
            }

        }
    },[initialValue, auctions, value, step])

    const handlerClickBuyNow = (event) => {
        event.preventDefault()
        const newauctions = [...auctions, {
            user:{
                id      :   user?.id,
                name    :   user?.name,
                email   :   user?.email,
                phone   :   user?.phone
            },
            mount: value,
            date: Date.now()
        }]
        actionSave('products', {
            auctions: newauctions
        }, id )
        const max = newauctions.reduce( (element,acc) => element.date > acc.date ? element : acc, { date: 0 } )
        if( max.date > 0 ) {
            setValue( prev => max.mount - step )
            setLimit( prev => max.mount )
        } else {
            setValue( prev => initialValue - step )
            setLimit( prev => initialValue )
        }
    }

    const maxValue = () => {
        if( auctions.length===0 ) return initialValue - step
        return auctions.reduce( (element,acc) => element.date > acc.date ? element : acc, { date: 0 } )?.mount - step
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
                max={ limit + step }
                onChange={ event => setValue( event.target.value ) }
            />
            <span className="w-1/4 flex flex-col items-center border-l border-indigo-200">
                <button type="button" onClick={handlerChangeValue(step)} disabled={ (limit-step) <= value } className="disabled:bg-white disabled:text-gray-600 font-semibold cursor-pointer border-b border-indigo-200 w-full text-center hover:bg-indigo-100 hover:text-indigo-500">+</button>
                <button type="button" onClick={handlerChangeValue(-step)} className="font-semibold cursor-pointer w-full text-center hover:bg-indigo-100 hover:text-indigo-500">-</button>
            </span>
        </span>
        <button
            className="border-l-2 border-indigo-400 py-3 px-6 hover:bg-indigo-100 hover:text-indigo-500"
            onClick={handlerClickBuyNow}
        >Ofertar</button>
    </div>
}