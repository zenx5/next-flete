"use client";

import { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuNav from './MenuNav';




export default function MovilMenu({ navigation }){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return <div>
        <button type="button" className="-ml-2 p-2 text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Open menu</span>
            { mobileMenuOpen ?  <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
        </button>
        { mobileMenuOpen && <div className="fixed flex flex-row justify-end gap-1 right-0 w-full">
            <div className="w-10/12 mx-auto flex flex-row justify-end">
                <div className="px-4 py-2 bg-white w-fit shadow-md rounded-md border border-gray-400" onMouseLeave={()=>setMobileMenuOpen(false)}>
                    <MenuNav navigation={navigation} movil />
                </div>
            </div>
        </div>}
    </div>
}