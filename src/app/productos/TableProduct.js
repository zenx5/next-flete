"use client";
import { useState, useEffect } from "react"
import { onSnap } from "@/tools/firebase/actions"
import ProductRow from "./ProductRow";

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
    { id:"auctions", label: "Last Auction", format: (auctionList) => {
        if( !auctionList || auctionList.length === 0 ) return "-"
        const auction = auctions.find( auction => auction.id===auctionList[0] )
        return auction?.mount ?? "-"
    } },
    { id:"status", label: "Status" },
]


export default function TableProduct() {
    const [entities, setEntities] = useState([])
    useEffect(()=>{
        onSnap( process.env.NEXT_PUBLIC_ENTITY_PRODUCT_NAME , data => {
            setEntities( prev => {
                const aux = []
                for( const item of data ) {
                    console.log(item)
                    aux.push(item)
                }
                return aux
            } )
        }, null)
    },[])

    return <table className="table w-full border-spacing-0 border-collapse">
        <thead>
            <tr className="table-row align-middle outline-0">
                { fields.map( (field,index) => <th key={index} className="leading-6 text-sm font-semibold table-cell text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">{ field.label }</th> )}
                <th className="leading-6 text-sm font-semibold table-cell text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">Actions</th>
            </tr>
        </thead>
        <tbody className="table-row-group">
            { entities.map( entity => <ProductRow key={'row' + entity.id} item={entity} fields={fields}/> ) }
        </tbody>
    </table>
}