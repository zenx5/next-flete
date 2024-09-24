"use client";
import { useEffect, useState } from 'react';
import { actionSave } from '@/tools/firebase/actions';
import { ENTITIES } from '@/tools/constants';

export default function AuctionUp({ id, auctions, step, initialValue, user, disabled }) {
    const currency = "$USD"
    const [value, setValue] = useState( 0 )
    const [limit, setLimit] = useState( 0 )
    useEffect(()=>{
        if( auctions.length>0 ) {
            const max = auctions.reduce( (element,acc) => element.date > acc.date ? element : acc, { date: 0 } )
            setValue( prev => parseFloat( max.mount ) - parseFloat( step ) )
            setLimit( prev => parseFloat( max.mount ) )
        } else {
            setValue( prev => parseFloat( initialValue ) )
            setLimit( prev => parseFloat( initialValue ) )
        }
    },[initialValue, auctions, step])

    const handlerClickBuyNow = (event) => {
        event.preventDefault()
        try{
            const newauctions = [...auctions, {
                user:{
                    id      :   user.id,
                    name    :   user?.name ?? "",
                    email   :   user?.email ?? "",
                    phone   :   user?.phone ?? ""
                },
                mount: value,
                date: Date.now()
            }]
            actionSave(ENTITIES.auctions, {
                auctions: newauctions
            }, id )
        } catch( error ) {
            console.log( error.message )
        }
    }

    const handlerChangeValue = (increment) => () => {
        setValue(prev => prev + increment)
    }

    return <div className="h-fit m-0 p-0 flex flex-row text-orange-flete border-2 border-orange-flete rounded-md">
        <span className="flex flex-row items-center">
            <span id="currency" className="w-1/4 text-center border-r border-orange-flete h-full items-center flex justify-center px-4">{ currency }</span>
            <input
                type="number"
                className="w-2/4 px-2 py-3 text-right outline-none disabled:text-gray-500"
                placeholder="0.00"
                value={ value }
                disabled={ disabled || value===0 }
                max={ limit - step }
                min={0}
                onChange={ event => setValue( event.target.value ) }
            />
            <span className="w-1/4 flex flex-col items-center border-l border-orange-flete">
                <button type="button" onClick={handlerChangeValue(step)} disabled={ disabled || value===0  || ((limit-step) <= value) } className="disabled:bg-white disabled:text-gray-600 font-semibold cursor-pointer border-b border-orange-200 w-full text-center hover:bg-orange-100 hover:text-orange-flete disabled:cursor-default">+</button>
                <button type="button" onClick={handlerChangeValue(-step)} disabled={ disabled || value===0 } className="font-semibold cursor-pointer w-full text-center hover:bg-orange-100 hover:text-orange-flete disabled:bg-white disabled:text-gray-600 disabled:cursor-default">-</button>
            </span>
        </span>
        <button
            className="border-l-2 border-orange-flete p-3 hover:bg-orange-100 hover:text-orange-flete disabled:bg-white disabled:text-gray-600 rounded-r-md"
            disabled={ disabled || value===0 || value>=limit }
            onClick={handlerClickBuyNow}
        >Ofertar</button>
    </div>
}