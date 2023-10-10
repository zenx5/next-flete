"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import modals from "@/tools/modals";
import { CloseIcon } from "./icons";

export default function ModalContainer() {
    const [ open, setOpen ] = useState(false);
    const [ content, setContent ] = useState( null );
    const searchParams = useSearchParams();

    const getModal = async (name, data) => {
        const modal = modals.find( modal => modal.name === name );
        if( !modal ) return false;
        const response = await modal.recovery( data )
        return modal.component( response );
    }

    useEffect(()=>{
        (async ()=>{
            const modalName = searchParams.get('modal');
            const params = searchParams.get('params');
            const data = {}
            if( !modalName ) {
                setContent( null )
                setOpen( false )
            }
            if( typeof params !== 'string' ) return;
            for( const param of params.split(',') ) {
                data[param] = searchParams.get(param)
            }
            if( modalName ){
                setOpen(true);
                const component = await getModal(modalName, data)
                if( component ) {
                    setContent( prev => component )
                }
                else {
                    setOpen(false);
                }
            }
        })()
    },[searchParams])


    return open && <div className="absolute z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <Link href="?" className="fixed rounded-md text-black z-20 top-10 right-10 p-2 border border-black">
            <CloseIcon />
        </Link>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            { content ? content : <div className="flex items-center justify-center min-h-screen text-center text-white font-bold">Loading...</div> }
        </div>
    </div>
}