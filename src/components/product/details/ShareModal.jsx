"use client";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import Image from "next/image";
import OverlayModal from "@/components/OverlayModal";
import whatsapp from "@/public/icons/whatsapp.svg";
import twitter from "@/public/icons/twitter.svg";
import facebook from "@/public/icons/facebook.svg";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function ShareModal({ url }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const searchParams = useSearchParams()

    useEffect(() => {
        setIsOpen( prev => !!JSON.parse( searchParams.get('share') ) )
    },[searchParams])

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        }
    },[isCopied])

    const handlerCopy = () => {
        navigator.clipboard.writeText( 'http://localhost:3000/confirmar-compra/10/pagar')
        setIsCopied(true)
    }

    return isOpen===true && <OverlayModal>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="flex flex-col bg-white py-8 px-8 gap-8">
                        <span className="flex flex-row justify-between items-center">
                            <h3 className="text-xl font-semibold">Compartir este Articulo</h3>
                            <Link href="?share=0">
                                <XMarkIcon className="w-5 h-5"/>
                            </Link>
                        </span>
                        <div className="flex flex-row">
                            <input type="text" className="w-full border border-black p-2 outline-none" value={'http://localhost:3000/confirmar-compra/10/pagar'} disabled/>
                            <button className="bg-black text-white p-2 w-40" onClick={handlerCopy} disabled={isCopied}>{ isCopied ? 'Copiado' : 'Copiar' }</button>
                        </div>
                        {/*Iconos circulares de redes sociales*/}
                        <div className="flex flex-row justify-center gap-10">
                            <Link href="#" target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-black p-2">
                                <Image src={facebook} alt="facebook" width={50} height={50}/>
                            </Link>
                            <Link href="#" target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-black p-2">
                                <Image src={twitter} alt="twitter" width={50} height={50}/>
                            </Link>
                            <Link href="#" target="_blank" className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-black p-2">
                                <Image src={whatsapp} alt="whatsapp" width={50} height={50}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </OverlayModal>
}