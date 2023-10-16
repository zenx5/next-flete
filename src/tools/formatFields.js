import Link from "next/link"
import { ENTITIES, ROUTER_PATH } from "./constants"
import { actionGet, actionSave } from "./firebase/actions"

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
    return `${width}${unit} x ${height}${unit} x ${large}${unit}`
}

export const formatAuction = (auctions, row, isAdmin) => {
    if( !auctions || auctions.length === 0 ) return "-"
    const lastAuction = auctions.reduce( (auction, acc) => auction.date>acc.date ? auction : acc , { mount : 0, date : 0 })
    return <span className="flex flex-col gap-0 items-center justify-center">
        <span>{lastAuction.mount} $USD</span>
        <small className="text-gray-400 italic">{lastAuction?.user?.email ?? '-'}</small>
    </span>
}

export const formatStatus = (status, row, isAdmin) => {
    if( isAdmin ) {
        const validateChange = async (event) => {
            if( status==="accept" ) return;
            switch( event.target.value ) {
                case "active":
                case "closed":
                    handlerChangeField("status", status, row)(event)
                    break;
                case "accept":
                    if( row.auctions.length > 0 ) {
                        handlerChangeField("status", status, row)(event)
                        const auction = row.auctions[ row.auctions.length - 1 ]
                        const user = await actionGet(ENTITIES.users, auction.user.id )
                        const oldauctions = user?.auctions ?? []
                        const newauction = {
                            ...row,
                            price: auction.mount,
                            date: auction.date,
                        }
                        delete newauction.auctions
                        delete newauction.status
                        actionSave(ENTITIES.users, {
                            ...user,
                            auctions: [
                                ...oldauctions,
                                newauction
                            ]
                        }, user.id)
                    }
                    break;
            }
        }
        return <select className="rounded-full px-3 py-2" value={status} onChange={validateChange}>
            <option className="p-2 font-medium" value="active">ACTIVE</option>
            <option className="p-2 font-medium" value="closed">CLOSED</option>
            <option className="p-2 font-medium" value="accept">ACCEPT</option>
        </select>
    }
    const className = status==='active' ?
        "bg-green-300 text-green-800" :
        status==='accept' ? "bg-yellow-300" : "bg-gray-300"
    return <span className={ "px-3 py-2 rounded-full uppercase font-medium " + className }>{status}</span>
}

export const formatName = (name, row, isAdmin) => {
    if( isAdmin ) {
        return <span className="flex flex-col">
            <span>{name}</span>
            <small className="text-blue-500 underline opacity-70 hover:opacity-100">
                <Link href={`${ROUTER_PATH.PROFILE}/${row.createdBy?.id}`}>{row.createdBy?.name}</Link>
            </small>
        </span>
    }
    return name
}

export const formatLocation = (location, row, isAdmin) => {
    return <span className="flex flex-col items-center">
        <span>{location.name}</span>
        <small className="text-[10px] m-0 p-0 opacity-50 italic">Lat: {location.position.lat}</small>
        <small className="text-[10px] m-0 p-0 opacity-50 italic">Lng: {location.position.lng}</small>
    </span>
}