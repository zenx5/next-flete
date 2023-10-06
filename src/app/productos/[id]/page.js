import ProductDetail from '@/components/product/details/ProductDetail'
import { products } from '@/tools/mockup/products.mockup';
import { auctions } from '@/tools/mockup/auctions.mockup';

export default async function Products({ params }) {
    const { id } = params;

    return <main className="flex min-h-screen flex-col">
            <ProductDetail productId={id} />
        </main>
}
