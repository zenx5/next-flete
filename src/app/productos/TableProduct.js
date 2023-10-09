"use client";
import { useState, useEffect } from "react"
import { onSnap } from "@/tools/firebase/actions"
import ProductRow from "./ProductRow";
import { SearchIcon } from "@/components/icons";
import { formatAuction, formatDimension, formatName, formatStatus, formatLocation } from "@/tools/formatFields";


const fields = [
    { id:"name", label: "Name", format: formatName},
    { id:"from", label: "From", format: formatLocation },
    { id:"to", label: "To", format: formatLocation },
    { id:"weight", label: "Weight" },
    { id:"dimensions", label: "Dimensions", format: formatDimension },
    { id:"auctions", label: "Last Auction", format: formatAuction },
    { id:"status", label: "Status", format: formatStatus },
]


export default function TableProduct({ isAdmin }) {
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
                { entities.filter( filterAuction ).map( entity => <ProductRow key={'row' + entity.id} item={entity} fields={fields} isAdmin={isAdmin} /> ) }
            </tbody>
        </table>
    </div>
}