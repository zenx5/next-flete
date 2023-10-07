import ProductDetail from '@/components/product/details/ProductDetail'

export default async function Products({ params }) {
    const { id } = params;

    return <main className="flex min-h-screen flex-col">
            <ProductDetail productId={id} />
        </main>
}
