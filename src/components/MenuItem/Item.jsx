import Link from "next/link"

export default function Item({ name, href, icon, onClick }){

    return <div className="group relative flex gap-x-6 px-4 py-2 hover:bg-gray-300">
        <div className="m-0 flex py-0 flex-none items-center justify-center gap-4">
            { icon }
            <ActionElement name={name} href={href} onClick={onClick} />
        </div>
    </div>
}

function ActionElement({ name, href, onClick}) {
    if( href!=='#' ) {
        return <Link
            href={href}
            className="font-semibold text-gray-900 group-hover:text-indigo-600"
            onClick={onClick}>{name}</Link>
    }

    return <button
        onClick={()=>{onClick}}
        className="font-semibold text-gray-900 group-hover:text-indigo-600"
        >{name}</button>
}