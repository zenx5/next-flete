"use client";

import { useRouter } from "next/navigation";

export default function MenuNav({ navigation, movil, onClick }) {
    const router = useRouter()

    const handlerClick = (name, href) => {
        router.push(href)
        if( onClick ) onClick(name, href)
    }

    return navigation.map((item) => (movil ?
        <div key={item.name} className="flow-root">
            <button
                className={ item?.className ?? "-m-2 block p-2 font-medium text-white"}
                onClick={() => handlerClick(item.name, item.href) }>
                {item.name}
            </button>
        </div>:
        <button
            key={item.name}
            className={ item?.className ?? "flex items-center text-sm font-medium text-white"}
            onClick={() => handlerClick(item.name, item.href)}
        >
            {item.name}
        </button>
    ))
}