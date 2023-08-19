import ProductsInCart from '@/components/cart/ProductsInCart'

export default async function CheckoutPage({ params }) {
    const { id } = params

    return <ProductsInCart id={id}/>
}
