import Link from 'next/link';
import ButtonCart from '../cart/ButtonCart';
import MenuNav from './MenuNav';
import Script from 'next/script';
import Image from 'next/image';

import { mainNavigation, secondaryNavigation } from '@/tools/navigation';
import MovilMenu from './MovilMenu';
import { getUser, isAuthenticated } from '@/tools/actions';
import { ROUTER_ID, ROUTER_PATH } from '@/tools/constants';

export default async function CustomHeader() {

    const isAuthenticatedBool = await isAuthenticated()
    const user = await getUser()


    const mainNav = mainNavigation.filter( item => {
        if( isAuthenticatedBool ) { // Si esta autenticado
            return item.id!==ROUTER_ID.LOGIN
        }
        // Si no esta autenticado
        return item.id!==ROUTER_ID.PROFILE && item.id!==ROUTER_ID.LOGOUT && item.id!==ROUTER_ID.PRODUCTS
    } )

    const accessNav = secondaryNavigation.filter( item => {
        if( isAuthenticatedBool ) {
            return item.id!==ROUTER_ID.LOGIN && item.id!==ROUTER_ID.REGISTER
        }
        return item.id!==ROUTER_ID.LOGOUT
    })

    return <header className="">
        <div className="flex flex-row items-center gap-10 w-10/12 mx-auto justify-between">
            <div>
                <Image src="/images/logo.jpeg" alt="" width={250} height={200} />
            </div>
            <div className="hidden h-full lg:flex justify-center space-x-8 items-center">
                <MenuNav navigation={mainNav} />
            </div>
            <div className="hidden h-full lg:flex justify-center space-x-8 items-center">
                <MenuNav navigation={accessNav} />
            </div>
        </div>
    </header>
}