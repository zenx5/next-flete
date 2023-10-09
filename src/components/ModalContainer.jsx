"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getModal } from "@/tools/actions";

export default function ModalContainer() {
    const [ open, setOpen ] = useState(false);
    const [ content, setContent ] = useState(null);
    const searchParams = useSearchParams();

    useEffect(()=>{
        (async ()=>{
            const modalName = searchParams.get('modal');
            if( modalName ){
                setOpen(true);
                const component = await getModal(modalName)
                if( component ) {
                    setContent( component )
                }
                else {
                    setOpen(false);
                }
            }
        })()
    },[searchParams])


    return open && <div className="absolute z-10" ariaLabelledby="modal-title" role="dialog" ariaModal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                { content ? content : <div className="flex items-center justify-center min-h-screen text-center text-white font-bold">Loading...</div> }
            </div>
    </div>
}