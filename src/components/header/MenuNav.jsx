"use client"
import Link from "next/link";
import { execAction } from "../../tools/actions"

export default function MenuNav({ navigation, movil, onClick }) {

    return navigation.map((item) => (movil ?
        <div key={item.name} className="flow-root">
            <Link
                className={ item?.className ?? "-m-2 block p-2 font-medium text-[#4b4b4b] uppercase hover:text-[#D36E2D]"}
                href={item.href ? item.href : '#'}
                onClick={ item.action ? ()=>execAction( item.action ) : null}
            >{item.name}</Link>
        </div>:
        <Link
            key={item.name}
            className={ item?.className ?? "flex items-center text-sm font-medium text-[#4b4b4b] uppercase hover:text-[#D36E2D]"}
            href={item.href ? item.href : '#'}
            onClick={ item.action ? ()=>execAction( item.action ) : null}
        >{item.name}</Link>
    ))
}