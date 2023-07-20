"use client";

import { useRouter } from "next/navigation";

export default function BreadCrumbs() {
    const path = ['Home', 'Productos', 'Producto 1']

    return <span className="flex flex-row mx-auto w-fit md:w-full md:max-w-7xl sm:px-6 pt-2 lg:px-8">
        { path.map( (item,index) => <p key={index} className="flex flex-row text-gray-700" >
            {index!==0 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>}
            <span>{item}</span>
        </p> )}
    </span>
}