import Link from "next/link"
import { ENTITIES, ROUTER_PATH, STATUS } from "./constants"
import { actionSave } from "./firebase/actions"
import StaringResume from "../components/StaringResume"
import ProductsModel from "./models/ProductsModel"
import CommentsModel from "./models/CommentsModel"
import { useEffect, useState } from "react"

const handlerChangeField = (field, value, row) => event => {
    if( event.target.value !== value ) {
        actionSave(ENTITIES.auctions, {
            ...row,
            [field]: event.target.value
        }, row.id)
    }
}

const handlerChangeDimension = (field, value, row) => event => {
    if( event.target.value !== value ) {
        actionSave(ENTITIES.auctions, {
            ...row,
            dimensions: {
                ...row.dimensions,
                [field]: event.target.value
            }
        }, row.id)
    }
}

export const formatDimension = (dimensions, row, isAdmin) => {
    const { width, height, large, unit } = dimensions;
    return <span className="flex flex-row gap-1 items-center">
        <span>{Number(width).toFixed(1)}</span>
        <span className="text-xs self-end mb-[3px]">{unit}</span>
        <span className="opacity-30">x</span>
        <span>{Number(height).toFixed(1)}</span>
        <span className="text-xs self-end mb-[3px]">{unit}</span>
        <span className="opacity-30">x</span>
        <span>{Number(large).toFixed(1)}</span>
        <span className="text-xs self-end mb-[3px]">{unit}</span>
    </span>
}

export const formatAuction = (auctions, row, isAdmin) => {
    if( !auctions || auctions.length === 0 ) return "-"
    const lastAuction = auctions.reduce( (auction, acc) => auction.date>acc.date ? auction : acc , { mount : 0, date : 0 })
    return <span className="flex flex-col gap-0 items-center justify-center">
        <span>{lastAuction.mount} $USD</span>
        <Link href={`/usuario/perfil/${lastAuction?.user?.id}`} target="_blank" className="text-blue-400 hover:underline text-xs italic">{lastAuction?.user?.email ?? '-'}</Link>
    </span>
}

export const formatStatus = (status, row, isAdmin) => {
    if( isAdmin ) {
        const validateChange = async (event) => {
            await ProductsModel.changeStatus(row.id, event.target.value)
        }

        const arrayStatus = Object.values(STATUS)

        return <span className="px-2 bg-white rounded-full block w-fit">
            <select className="outline-none rounded-full bg-white px-1 py-2 uppercase" value={status} onChange={validateChange}>
                { arrayStatus.map( item => <option key={item} className="py-2 px-6 font-medium uppercase" value={item}>{item}</option>) }
            </select>
        </span>
    }
    const className = status==='active' ?
        "bg-green-300 text-green-800" :
        status==='accept' ? "bg-yellow-300" : "bg-gray-300"
    return <span className={ "px-3 py-2 rounded-full uppercase font-medium " + className }>{status}</span>
}

export const FormatName = (name, row, isAdmin) => {
    const [staring, setStaring] = useState(0)
    useEffect(()=>{
        (async()=>{
            const data = await CommentsModel.search("userId", row.createdBy?.id)
            if( data.length>0 ) {
                setStaring( data?.map( item => item.rating ).filter( item => parseFloat(item) )?.reduce( (acc, rating)=> acc+rating,0 )/data.length )
            }
        })()
    },[row.createdBy?.id])
    if( isAdmin ) {
        return <span className="flex flex-col">
            <span>{name}</span>
            <small className="text-blue-500 opacity-70 hover:opacity-100 flex flex-row gap-2">
                <Link className="underline" href={`${ROUTER_PATH.PROFILE}/${row.createdBy?.id}`}>{row.createdBy?.name}</Link>
                <span className="!no-underline flex flex-row">
                    <StaringResume value={staring} />
                </span>
            </small>
        </span>
    }
    return name
}

export const formatLocation = (location, row, isAdmin) => {
    return <span className="flex flex-row md:flex-col items-center gap-2 md:gap-0">
        <span>{location.name}</span>
    </span>
}