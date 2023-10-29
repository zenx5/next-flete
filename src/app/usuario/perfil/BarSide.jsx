"use client";
import { useState } from "react";

export default function BarSide({ items=[], contents=[] }) {
    const [selected, setSelected] = useState(items[0].href);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return <>
        <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
            <nav className="space-y-1 flex flex-row lg:flex-col">
                {items.map((item) => (
                    <button
                    key={item.name}
                    onClick={() => setSelected(item.href)}
                    className={classNames(
                        item.href === selected ? 'border-orange-flete bg-orange-50 text-orange-flete' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center lg:justify-start justify-center border-l-0 border-b-4 lg:border-l-4 lg:border-b-0 py-2 px-3 text-base font-medium w-full'
                    )}
                    >
                    { item?.icon && <item.icon
                        className={classNames(
                        item.href === selected ? 'text-orange-500' : 'text-gray-400 group - hover:text-gray-500',
                        '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                        )}
                    />}
                    <span className="truncate">{item.name}</span>
                    </button>
                ))}
            </nav>
        </aside>
        <div className="mx-6 mt-5 lg:mt-0 col-span-9">{ contents.map((content, index) => selected===index && content  )}</div>
    </>
}