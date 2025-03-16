import Link from "next/link"
import { EditIcon, DeleteIcon, OpenIcon, MapPinIcon } from "@/components/icons"
import { ROUTER_PATH } from "@/tools/constants"
import { useState } from "react"

export default function RowCardMobile({ id, name, from, to, dimensions, weight, status, isAdmin, isOwner, onDelete }) {
    const [showLocation, setShowLocation] = useState(false)

    return <td className="w-full xl:hidden py-3 border-b border-slate-400 px-0 mx-0" >
        <span className="flex flex-row xl:hidden text-inherit align-middle outline-none hover:bg-slate-200 py-1 px-2 w-full items-center">
            <span className="w-3/12 font-semibold text-slate-600 text-left pr-2">Name</span>
            <span className="w-9/12 text-left pl-2">{ name }</span>
        </span>
        { showLocation && <span className="flex flex-row xl:hidden text-inherit align-middle outline-none hover:bg-slate-200 py-1 px-2 w-full items-center">
            <span className="w-3/12 font-semibold text-slate-600 text-left pr-2">From</span>
            <span className="w-9/12 ">{ from }</span>
        </span>}
        { showLocation && <span className="flex flex-row xl:hidden text-inherit align-middle outline-none hover:bg-slate-200 py-1 px-2 w-full items-center">
            <span className="w-3/12 font-semibold text-slate-600 text-left pr-2">To</span>
            <span className="w-9/12">{ to }</span>
        </span>}
        { !showLocation && <span className="flex flex-row xl:hidden text-inherit align-middle outline-none hover:bg-slate-200 py-1 px-2 w-full items-center">
            <span className="w-3/12 font-semibold text-slate-600 text-left pr-2">Dimensions</span>
            <span className="w-9/12 text-left pl-2 italic" >{ dimensions }</span>
        </span>}
        { !showLocation && <span className="flex flex-row xl:hidden text-inherit align-middle outline-none hover:bg-slate-200 py-1 px-2 w-full items-center">
            <span className="w-3/12 font-semibold text-slate-600 text-left pr-2">Weight <small className="text-xs">(Kg)</small></span>
            <span className="w-9/12 text-left pl-2">{ weight }</span>
        </span>}
        <span className="flex flex-row xl:hidden text-inherit align-middle outline-none hover:bg-slate-200 py-1 px-2 w-full items-center justify-between gap-5">
            <span className="w-3/12">{ status }</span>
            <span colSpan={2} className="leading-6 text-sm font-normal text-center text-[#212B36] border-b-0">
                <span className="flex flex-row gap-1">
                    <button onClick={()=>setShowLocation(!showLocation)} className="py-1 px-1 rounded-md border-2 border-black text-black bg-transparent hover:text-gray-500 hover:border-gray-500 uppercase text-sm" >
                        <MapPinIcon />
                    </button>
                    { (isAdmin || isOwner) && <button onClick={onDelete} className="py-1 px-1 rounded-md border-2 border-red-600 hover:bg-red-600 text-red-600 bg-transparent hover:text-white uppercase text-sm" >
                        <DeleteIcon />
                    </button>}
                    { (isAdmin || isOwner) && <Link className="py-1 px-1 rounded-md border-2 border-blue-600 hover:bg-blue-600 text-blue-600 bg-transparent hover:text-white uppercase text-sm" href={`?modal=edit-auction&params=id&id=${id}`}>
                        <EditIcon />
                    </Link>}
                    <Link className="py-1 px-1 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white bg-transparent text-green-600 uppercase text-sm" href={`${ROUTER_PATH.PRODUCTS}/${id}`}>
                        <OpenIcon />
                    </Link>
                </span>
            </span>
        </span>
    </td>
}