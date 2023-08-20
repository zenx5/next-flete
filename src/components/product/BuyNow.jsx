"use client";
import { ROUTER_PATH } from '@/tools/constants';
import { useRouter } from 'next/navigation';

export default function BuyNow({ id, className }) {
    const router = useRouter()

    const handlerClickBuyNow = (event) => {
        event.preventDefault()
        router.push(`${ROUTER_PATH.CHECKOUT}/${id}`)
    }

    return <button
        className={className}
        onClick={handlerClickBuyNow}
        >Comprar ahora</button>
}