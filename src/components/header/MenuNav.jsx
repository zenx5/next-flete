"use client"
import Link from "next/link";
import { execAction } from "../../tools/actions"
import { usePathname } from "next/navigation";


export default function MenuNav({ navigation, movil }) {
    const pathname = usePathname()

    return navigation.map((item) => (movil ?
        <div key={item.name} className="flow-root">
            <Link
                className={ item?.className ?? `-m-2 block p-2 font-medium ${pathname===item.href ? 'text-[#D36E2D]' : 'text-[#4b4b4b]'} uppercase hover:text-[#D36E2D]`}
                href={item.href ? item.href : '#'}
                onClick={ item.action ? ()=>execAction( item.action ) : null}
            >{item.name}</Link>
        </div>:
        <Link
            key={item.name}
            className={ item?.className ?? `flex items-center text-sm font-medium ${pathname===item.href ? 'text-[#D36E2D]' : 'text-[#4b4b4b]'} uppercase hover:text-[#D36E2D] active:text-red-500`}
            href={item.href ? item.href : '#'}
            onClick={ item.action ? ()=>execAction( item.action ) : null}
        >{item.name}</Link>
    ))
}