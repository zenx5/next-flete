import Link from "next/link"

export default function Item({ name, href, icon, onClick }){

    return <div className="group relative flex gap-x-6 hover:bg-gray-300">
        <ActionElement name={
            <div className="m-0 flex flex-none items-center justify-center gap-4">
                { icon }
                <span>{ name }</span>
            </div>
        } href={href} onClick={onClick} />
    </div>
}

function ActionElement({ name, href, onClick}) {
    const className = "font-semibold text-gray-900 group-hover:text-indigo-600 px-4 py-2 w-full flex flex-row justify-start"
    if( href!=='#' ) {
        return <Link
            href={href}
            className={className}
            onClick={onClick}>{name}</Link>
    }

    return <button
        onClick={()=>{onClick}}
        className={className}
        >{name}</button>
}