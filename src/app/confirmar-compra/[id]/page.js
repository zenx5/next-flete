import ProductsInCart from '@/components/cart/ProductsInCart'
import Script from "next/script";

export default async function CheckoutPage({ params }) {
    const { id } = params
    return <ProductsInCart id={id}/>
}
