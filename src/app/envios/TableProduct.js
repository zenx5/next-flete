"use client";
import { useState, useEffect, useCallback } from "react"
import Link from "next/link";
import ProductRow from "./ProductRow";
import { SearchIcon } from "@/components/icons";
import { formatAuction, formatDimension, FormatName, formatStatus, formatLocation } from "@/tools/formatFields";
import { ArrowLeft, ArrowRight } from '@/components/icons'
import Tabs from "./Tabs";
import { TABS } from "@/tools/constants";
import ProductsModel from '@/tools/models/ProductsModel'
import moment from "moment";
import { STATUS } from "../../tools/constants";

const fields = [
    { id:"name", label: "Name", format: FormatName},
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
        ProductsModel.onChange( data => {
            const aux = []
            for( const item of data ) {
                const diff = moment( Date.parse(item?.endTime) ).diff( Date.now() )
                if( diff <= 0 && item.status===STATUS.ACTIVE ) {
                    const temp = {...item, status: item.auctios?.length>0 ? STATUS.ACCEPT : STATUS.CLOSED }
                    aux.push( temp )
                    ProductsModel.changeStatus( item.id, item.auctios?.length>0 ? STATUS.ACCEPT : STATUS.CLOSED )
                    //.put(item.id, temp)
                }else {
                    aux.push(item)
                }
            }
            setEntities( aux )
        } )
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
        if(currentTab===TABS.AVAILABLE) return entity.createdBy.id!==userId && entity.status===STATUS.ACTIVE
        if(currentTab===TABS.FAVORITE) return entity.auctions.map( auction => auction.user.id ).includes( userId ) && entity.status!=='closed'
        if(currentTab===TABS.SELF) return entity.createdBy.id===userId
        if(currentTab===TABS.ALL && isAdmin) return true
        return false
    }, [currentTab, userId, isAdmin])


    useEffect(()=>{
        const _total = entities.filter( filterGroup ).filter( filterSearch ).length
        setTotal( prev => _total )
        setMin( perPage*(page - 1) + 1 )
        setMax( perPage*page>_total ? _total : perPage*page )
    },[entities, filterGroup, filterSearch, page, perPage])

    useEffect(()=>{
        setPage( prev => 1 )
    },[perPage, currentTab])

    const labelTabs = [
        'Envios disponibles',
        'Favoritos',
        'Mis Envios',
        'Todas'
    ]

    const filterByTab = targetTab => (entity) => {
        if( !entity?.createdBy ) return false
        if(targetTab===TABS.AVAILABLE) return entity.createdBy.id!==userId && entity.status===STATUS.ACTIVE
        if(targetTab===TABS.FAVORITE) return entity.auctions.map( auction => auction.user.id ).includes( userId ) && entity.status!=='closed'
        if(targetTab===TABS.SELF) return entity.createdBy.id===userId
        if(targetTab===TABS.ALL && isAdmin) return true
        return false
    }

    const filterPagination = (entity, index) => {
        return min <= index + 1 && max >= index + 1
    }



    return <div className="w-full md:w-10/12 px-5 mx-auto mt-5">
        <div className="flex md:flex-row flex-col items-center gap-1 md:gap-4 justify-between w-full">
            <div className="flex flex-row items-center border border-gray-200 hover:border-gray-900 rounded-lg py-2 px-4 my-5 gap-5 bg-white w-full md:w-10/12">
                <SearchIcon />
                <input type="text" value={target} onChange={event=>setTarget(event.target.value)} className="outline-none p-2 w-full" placeholder="Buscar..."/>
            </div>
            <Link href={`?modal=edit-auction&params=id,userid&id=0&userid=${userId}`} className="md:relative fixed md:right-auto md:bottom-auto right-5 bottom-5 bg-orange-500 hover:bg-orange-700 text-white md:rounded rounded-full p-2 md:w-2/12 w-fit text-center">
                <span className="md:block hidden ">Crear Envio</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block md:hidden w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </Link>
        </div>
        <Tabs onChange={tab=>setCurrentTab(tab)} labels={ labelTabs.map( (label, index) => `${label} (${entities.filter( filterByTab(index) ).length})` ) }/>
        <table className="table w-full border-spacing-0 border-collapse px-2 mt-5 md:mb-5 mb-20">
            <thead>
                <tr className="hidden md:table-row align-middle outline-0">
                    { fields.map( (field,index) => <th key={index} className="table-cell leading-6 text-sm font-semibold text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">{ field.label }</th> )}
                    <th className="leading-6 text-sm font-semibold table-cell text-left text-[#637381] bg-[#F4F6F8] p-4  border-b-0">Actions</th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                { entities.filter( filterGroup ).filter( filterPagination ).filter( filterSearch ).map( entity => <ProductRow key={'row' + entity.id} item={entity} fields={fields} isAdmin={isAdmin} isOwner={entity?.createdBy?.id===userId}/> ) }
            </tbody>
            { entities.filter( filterGroup ).filter( filterSearch ).length===0 && <tbody className="italic text-gray-500 text-center w-full">
                <tr>
                    <td colSpan={fields.length + 1} className="py-10">- No hay ofertas -</td>
                </tr>
            </tbody> }
        </table>
        <div className="flex flex-row items-center justify-end gap-10 md:relative fixed bottom-5 left-5">
            <div className="md:p-4 p-0 flex flex-row gap-2">
                <span className="md:block hidden">Rows per page</span>
                <select className="outline-none" onChange={event=> setPerPage(event.target.value)} value={perPage}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={total}>All</option>
                </select>
            </div>
            <div className="p-4 md:block hidden">
                {min} - {max} of { total }
            </div>
            <div className="flex flex-row md:p-4 p-0 items-center">
                <button onClick={() => setPage( prev => prev - 1 )} disabled={page===1 || perPage==total} className="disabled:text-gray-500"><ArrowLeft /></button>
                <select className="font-semibold px-4 py-1 mx-2 border border-gray-400 rounded" value={page} disabled={perPage==total} onChange={ev => setPage( parseInt(ev.target.value) )}>
                    { Array(Math.round( total/perPage + 0.5 )).fill(1).map( (f, index) => <option key={`page-index-${index+1}`} value={index + 1}>{index + 1}</option> )}
                </select>
                <button onClick={() => setPage( prev => prev + 1 )} disabled={ page==Math.round( total/perPage + 0.5 ) || perPage==total } className="disabled:text-gray-500"><ArrowRight /></button>
            </div>
        </div>
    </div>
}