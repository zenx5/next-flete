"use client"
import ProductsModel from "@/tools/models/ProductsModel"
import { useEffect, useState } from "react"

export default function ActionDetails({ product, user }){
    const [openTicket, setOpenTicket] = useState(false)

    useEffect(()=>{
        if( product?.id && product?.tickets && product?.tickets.length>0 ) {
            const ticket = product?.tickets[ product?.tickets.length - 1 ]
            setOpenTicket( ticket?.open )
        }
    },[product?.id, product?.tickets])

    const handlerTicket = () => {

    }

    const handlerConfirm = () => {

    }


    return <span className="flex flex-row gap-5">
        <button onClick={handlerTicket} disabled={openTicket} className="disabled:bg-red-200 disabled:text-gray-500 bg-red-400 text-white rounded px-2 py-1">Abrir Ticket</button>
        <button onClick={handlerConfirm} className="bg-green-500 text-white font-bold rounded px-2 py-1">Confirmar</button>
    </span>
}
