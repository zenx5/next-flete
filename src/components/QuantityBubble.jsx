import { useState } from "react";

export default function QuantityBubble({
    value = 0,
    step = 1,
    min,
    max,
    onChange
}) {
    const [quantity,setQuantity] = useState( value )

    const change = (step) => {
        let result = parseInt(quantity) + step
        if( min!==null && result < min ) result = min;
        else if( max!==null && result > max ) result = max
        setQuantity( prev => result)
        if( onChange ) onChange( result )
    }

    const validateInput = (event) => {
        if( event.code.includes("Arrow") || event.code==="Delete" || event.code==="Backspace" ) return;
        if(isNaN( event.key )) {
            event.preventDefault()
        }
    }

    const updateQuantity = ({ target: { value } }) => {
        if( value.trim() == '' ) {
            setQuantity(prev => min!==null ? min : 0)
            if( onChange ) onChange( min!==null ? min : 0 )
        } else {
            setQuantity( value )
            if( onChange ) onChange( value )
        }
    }

    return <span className="flex flex-row items-center bg-black rounded-xl">
        <button
            onClick={()=>change( - parseInt(step) )}
            className="font-bold text-xl text-white bg-black  pl-2 pr-1 rounded-l-xl"
        >-</button>
        <input
            type="text"
            value={quantity}
            onKeyDown={validateInput}
            onChange={updateQuantity}
            className="w-[50px] text-black font-weight text-center"/>
        <button
            onClick={()=>change( parseInt(step) )}
            className="font-bold text-xl text-white bg-black pl-1 pr-2 rounded-r-xl"
        >+</button>
    </span>
}