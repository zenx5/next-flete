"use client";
import { useState, useEffect, useCallback } from "react"
import Link from "next/link";
import { onSnap } from "@/tools/firebase/actions"
import ProductRow from "./ProductRow";
import { SearchIcon } from "@/components/icons";
import { formatAuction, formatDimension, formatName, formatStatus, formatLocation } from "@/tools/formatFields";
import { ArrowLeft, ArrowRight } from '../../components/icons'
import Tabs from "./Tabs";
import { TABS } from "../../tools/constants";


const fields = [
    { id:"name", label: "Name", format: formatName},
    { id:"from", label: "From", format: formatLocation },
    { id:"to", label: "To", format: formatLocation },
    { id:"weight", label: "Weight" },
    { id:"dimensions", label: "Dimensions", format: formatDimension },
    { id:"auctions", label: "Last Auction", format: formatAuction },
    { id:"status", label: "Status", format: formatStatus },
]


export default function TableProduct({ userId, isAdmin }) {
    const [target, setTarget] = useState("")
    const [currentTab, setCurrentTab] = useState(0)
    const [entities, setEntities] = useState([])
    const [perPage, setPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(5)
    const [total, setTotal] = useState(0)

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

    const filterSearch = useCallback( (entity) => {
        if( target.trim()==="" ) return true
        return (
            entity.name.trim().toLowerCase().includes( target.trim().toLowerCase() ) ||
            entity.from.trim().toLowerCase().includes( target.trim().toLowerCase() ) ||
            entity.to.trim().toLowerCase().includes( target.trim().toLowerCase() )
        )
    },[target])

    const filterGroup = useCallback( (entity) => {
        if( !entity?.createdBy ) return false
        if(currentTab===TABS.AVAILABLE) return entity.createdBy.id!==userId && entity.status==='active'
        if(currentTab===TABS.FAVORITE) return entity.auctions.map( auction => auction.user.id ).includes( userId ) && entity.status!=='closed'
        if(currentTab===TABS.SELF) return entity.createdBy.id===userId
        return false
    }, [currentTab, userId])


    useEffect(()=>{
        const _total = entities.filter( filterGroup ).filter( filterSearch ).length
        setTotal( prev => _total )
        setMin( perPage*(page - 1) + 1 )
        setMax( perPage*page>_total ? _total : perPage*page )
    },[entities, filterGroup, filterSearch, page, perPage])

    const labelTabs = [
        'Envios disponibles',
        'Favoritos',
        'Mis Envios',
    ]

    const filterByTab = targetTab => (entity) => {
        if( !entity?.createdBy ) return false
        if(targetTab===TABS.AVAILABLE) return entity.createdBy.id!==userId && entity.status==='active'
        if(targetTab===TABS.FAVORITE) return entity.auctions.map( auction => auction.user.id ).includes( userId ) && entity.status!=='closed'
        if(targetTab===TABS.SELF) return entity.createdBy.id===userId
        return false
    }



    return <div>
        <div className="flex flex-row items-center gap-4 justify-between">
            <div className="flex flex-row items-center border border-gray-200 hover:border-gray-900 rounded-lg py-2 px-4 my-5 gap-5 bg-white w-10/12">
                <SearchIcon />
                <input type="text" value={target} onChange={event=>setTarget(event.target.value)} className="outline-none p-2 w-full" placeholder="Buscar..."/>
            </div>
            <Link href={`?modal=edit-auction&params=id,userid&id=0&userid=${userId}`} className="bg-orange-500 hover:bg-orange-700 text-white rounded p-2 w-2/12 text-center">Crear Envio</Link>
        </div>
        <Tabs onChange={tab=>setCurrentTab(tab)} labels={ labelTabs.map( (label, index) => `${label} (${entities.filter( filterByTab(index) ).length})` ) }/>
        <table className="table w-full border-spacing-0 border-collapse">
            <thead>
                <tr className="table-row align-middle outline-0">
                    { fields.map( (field,index) => <th key={index} className="leading-6 text-sm font-semibold table-cell text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">{ field.label }</th> )}
                    <th className="leading-6 text-sm font-semibold table-cell text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">Actions</th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                { entities.filter( filterGroup ).filter( filterSearch ).map( entity => <ProductRow key={'row' + entity.id} item={entity} fields={fields} isAdmin={isAdmin} isOwner={entity?.createdBy?.id===userId}/> ) }
            </tbody>
            { entities.filter( filterGroup ).filter( filterSearch ).length===0 && <tbody className="italic text-gray-500 text-center w-full">
                <tr>
                    <td colSpan={fields.length + 1} className="py-10">- No hay ofertas -</td>
                </tr>
            </tbody> }
        </table>
        <div className="flex flex-row items-center justify-end gap-10">
            <div className="p-4 flex flex-row gap-2">
                <span>Rows per page</span>
                <select className="outline-none" onChange={event=> setPerPage(event.target.value)} value={perPage}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={total}>All</option>
                </select>
            </div>
            <div className="p-4">
                {min} - {max} of { total }
            </div>
            <div className="flex flex-row p-4 items-center">
                <button onClick={() => setPage( prev - 1 )} disabled={page===1} className="disabled:text-gray-500"><ArrowLeft /></button>
                <select className="font-semibold px-4 py-1 mx-2 border border-gray-400 rounded" value={page} onChange={ev => setPage( ev.target.value )}>
                    { Array(Math.round( total/perPage + 0.5 )).fill(1).map( (f, index) => <option key={`page-index-${index+1}`} value={index + 1}>{index + 1}</option> )}
                </select>
                <button onClick={() => setPage( prev + 1 )} disabled={page===Math.round( total/perPage + 0.5 )  } className="disabled:text-gray-500"><ArrowRight /></button>
            </div>
        </div>
    </div>
}