"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { execAction } from "../../tools/actions"

export default function MenuNav({ navigation, movil, onClick }) {
    const router = useRouter()


    return navigation.map((item) => (movil ?
        <div key={item.name} className="flow-root">
            <Link
                className={ item?.className ?? "-m-2 block p-2 font-medium text-white"}
                href={item.href ? item.href : '#'}
                onClick={ item.action ? ()=>execAction( item.action ) : null}
            >{item.name}</Link>
        </div>:
        <Link
            key={item.name}
            className={ item?.className ?? "flex items-center text-sm font-medium text-white"}
            href={item.href ? item.href : '#'}
            onClick={ item.action ? ()=>execAction( item.action ) : null}
        >{item.name}</Link>
    ))
}