"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { PAYMENT_METHODS } from "@/tools/constants";
import OverlayModal from "@/components/OverlayModal";

export default function PaymentModal() {
    const [payment, setpayment] = useState(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathnanme = usePathname()
    const paymentMethods = PAYMENT_METHODS

    useEffect(() => {
        //obtener parametro de url
        setpayment( prev => searchParams.get('payment') )
    },[searchParams])

    const closeModal = () => {
        router.push(pathnanme)
    }

    return payment && <OverlayModal>

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="flex items-center gap-5">
                            <div className="mx-auto flex h-30 w-30 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-20 sm:w-20">
                                <Image src={`/ImagesCadeteSiempre/${paymentMethods[payment]?.image}`} alt={paymentMethods[payment]?.title} width={100} height={100}/>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{paymentMethods[payment]?.title}</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{paymentMethods[payment]?.description}</p>
                                </div>
                                <div className="flex justify-between bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" onClick={closeModal} className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </OverlayModal>
}