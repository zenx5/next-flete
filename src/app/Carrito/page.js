import Image from 'next/image'

import ShoppingCart from '@/components/cart/ShoppingCart'

export default function Cart() {
    return (
        <main className="flex min-h-screen flex-col">
            <ShoppingCart />
        </main>
    )
}
