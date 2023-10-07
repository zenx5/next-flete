import TableProduct from './TableProduct';
import { ArrowLeft, ArrowRight } from '../../components/icons'
import { getUser } from '../../tools/actions';
import { redirect } from 'next/navigation';

export default function Products() {
    const user = getUser()
    if( !user ) return redirect("/")
    const page = 1
    const min = 1
    const max = 5
    return (
        <main className="flex min-h-screen flex-col bg-slate-100">
            <div className="w-2/3 mx-auto mt-10">
                <TableProduct />
                <div className="flex flex-row items-center justify-end gap-10">
                    <div className="p-4 flex flex-row gap-2">
                        <span>Rows per page</span>
                        <select className="outline-none">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={-1}>All</option>
                        </select>
                    </div>
                    <div className="p-4">
                        {min} - {max} of { "products.length" }
                    </div>
                    <div className="flex flex-row p-4">
                        <button><ArrowLeft /></button>
                        <button><ArrowRight /></button>
                    </div>
                </div>
            </div>
        </main>
    )
}