import TableProduct from './TableProduct';
import { getUser } from '../../tools/actions';
import { redirect } from 'next/navigation';
import { USER_TYPE } from '../../tools/constants';

export default function Products() {
    const user = getUser()
    if( !user ) return redirect("/")

    return (
        <main className="flex min-h-screen flex-col bg-slate-100 mt-10">
            <TableProduct isAdmin={user?.type===USER_TYPE.ADMIN} userId={user.id}/>
        </main>
    )
}