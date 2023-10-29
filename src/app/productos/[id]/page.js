import ProductDetail from '@/components/product/details/ProductDetail'
import { getUser } from '../../../tools/actions';
import { redirect } from 'next/navigation';

export default async function Products({ params }) {
    const { id } = params;
    const user = getUser()

    if( !user ) return redirect("/")

    return <main className="flex min-h-screen flex-col pt-10">
            <ProductDetail productId={id} user={user} />
        </main>
}
