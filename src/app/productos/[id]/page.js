import ProductDetail from '@/components/product/details/ProductDetail'


export default async function Products({ params }) {
    const { id } = params;
    
    const response = await fetch(`${process.env.API_URL}/products/${id}`)
    const { code, data:product } = await response.json()
    
    return (
        <main className="flex min-h-screen flex-col">
            { code==0 && <ProductDetail product={product} relatedProducts={[]} />}
        </main>
    )
}
