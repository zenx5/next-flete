"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PaymentModal() {
    const [payment, setpayment] = useState(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathnanme = usePathname()

    const paymentMethods = {
        "pago_movil": {
            "title": "Pago Movil",
            "description": "Paga con tu banco a traves de la aplicacion movil de tu banco",
            "image": "pago_movil.svg"
        },
        "tdc": {
            "title": "Tarjeta de Credito",
            "description": "Paga con tu tarjeta de credito",
            "image": "tdc.svg"
        },
        "zelle": {
            "title": "Zelle",
            "description": "Paga con tu cuenta de zelle",
            "image": "zelle.svg"
        },
        "paypal": {
            "title": "Paypal",
            "description": "Paga con tu cuenta de paypal",
            "image": "paypal.svg"
        }
    }

    useEffect(() => {
        //obtener parametro de url
        setpayment( prev => searchParams.get('payment') )
    },[searchParams])

    const closeModal = () => {
        router.push(pathnanme)
    }

    return payment && <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="flex items-center gap-5">
                    <div class="mx-auto flex h-30 w-30 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-20 sm:w-20">
                        <Image src={`/ImagesCadeteSiempre/${paymentMethods[payment]?.image}`} alt={paymentMethods[payment]?.title} width={100} height={100}/>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{paymentMethods[payment]?.title}</h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">{paymentMethods[payment]?.description}</p>
                        </div>
                        <div class="flex justify-between bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" onClick={closeModal} class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Aceptar</button>
                            {/* <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button> */}
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
        </div>
    </div>
}