"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { PAYMENT_METHODS } from "@/tools/constants";
import OverlayModal from "@/components/OverlayModal";

export default function LocationModal() {
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

    return <OverlayModal>
        <div className="flex justify-center items-center w-full h-full">
            <div className="bg-white p-10"></div>
        </div>
    </OverlayModal>
}