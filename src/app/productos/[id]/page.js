import ProductDetail from '@/components/product/details/ProductDetail'
import { products } from '@/tools/mockup/products.mockup';
import { auctions } from '@/tools/mockup/auctions.mockup';

export default async function Products({ params }) {
    const { id } = params;
    // const response = await fetch(`${process.env.API_URL}/products/${id}`, { cache:'force-cache' })
    // const { code, data:product } = await response.json()
    const code = 0
    const product = products.find( product => product.id == id )
    return (
        <main className="flex min-h-screen flex-col">
            { code==0 && <ProductDetail product={{
                ...product,
                auctions: product.auctions.map( id => auctions.find( auction => auction.id===id )).slice(0,3)
            }} />}
        </main>
    )
}
