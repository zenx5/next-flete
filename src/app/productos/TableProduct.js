"use client";
import { useState, useEffect } from "react"
import { onSnap } from "@/tools/firebase/actions"
import ProductRow from "./ProductRow";
import { SearchIcon } from "@/components/icons";

const fields = [
    { id:"name", label: "Name" },
    { id:"from", label: "From" },
    { id:"to", label: "To" },
    { id:"weight", label: "Weight" },
    { id:"dimensions", label: "Dimensions", format: (a) => {
        if( !a ) return ""
        const {width, height, large, unit} = a
        return `${width}${unit} x ${height}${unit} x ${large}${unit}`
    } },
    { id:"auctions", label: "Last Auction", format: (auctions) => {
        if( !auctions || auctions.length === 0 ) return "-"
        const lastAuction = auctions.reduce( (auction, acc) => auction.date>acc.date ? auction : acc , { mount : 0, date : 0 })
        return <span className="flex flex-col gap-0 items-center justify-center">
            <span>{lastAuction.mount} $USD</span>
            <small className="text-gray-400 italic">{lastAuction?.user?.email ?? '-'}</small>
        </span>
    } },
    { id:"status", label: "Status", format: label => {
        const className = label==='active' ? "bg-green-300 text-green-800" : "bg-gray-300 "
        return <span className={ "px-3 py-2 rounded-full uppercase font-medium " + className }>{label}</span>
    } },
]


export default function TableProduct() {
    const [target, setTarget] = useState("")
    const [entities, setEntities] = useState([])
    useEffect(()=>{
        onSnap( process.env.NEXT_PUBLIC_ENTITY_PRODUCT_NAME , data => {
            setEntities( prev => {
                const aux = []
                for( const item of data ) {
                    aux.push(item)
                }
                return aux
            } )
        }, null)
    },[])

    const filterAuction = (auction) => {
        if( target.trim()==="" ) return true
        return (
            auction.name.trim().toLowerCase().includes( target.trim().toLowerCase() ) ||
            auction.from.trim().toLowerCase().includes( target.trim().toLowerCase() ) ||
            auction.to.trim().toLowerCase().includes( target.trim().toLowerCase() )
        )
    }

    return <div>
        <div>
            <div className="flex flex-row items-center border border-gray-200 hover:border-gray-900 rounded-lg py-2 px-4 my-5 gap-5 bg-white">
                <SearchIcon />
                <input type="text" value={target} onChange={event=>setTarget(event.target.value)} className="outline-none p-2 w-full" placeholder="Buscar..."/>
            </div>
        </div>
        <table className="table w-full border-spacing-0 border-collapse">
            <thead>
                <tr className="table-row align-middle outline-0">
                    { fields.map( (field,index) => <th key={index} className="leading-6 text-sm font-semibold table-cell text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">{ field.label }</th> )}
                    <th className="leading-6 text-sm font-semibold table-cell text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">Actions</th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                { entities.filter( filterAuction ).map( entity => <ProductRow key={'row' + entity.id} item={entity} fields={fields}/> ) }
            </tbody>
        </table>
    </div>
}