import ProductList from '@/components/product/ProductList'

export default async function Products() {
    const response = await fetch(`${process.env.API_URL}/products`, { cache:'force-cache' })
    const { code, data:products } = await response.json()


    return (
        <main className="flex min-h-screen flex-col">
            { code==0 && <ProductList products={products} />}
        </main>
    )
}
