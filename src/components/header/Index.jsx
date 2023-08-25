import Link from 'next/link';
import ButtonCart from '../cart/ButtonCart';
import MenuNav from './MenuNav';

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
        } else { // Si no esta autenticado
            return item.id!==ROUTER_ID.PROFILE && item.id!==ROUTER_ID.LOGOUT
        }
    } )

    return <header className="relative z-10 bg-black">
        <nav aria-label="Top">
            <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex h-16 items-center justify-between">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                <Link href="/">
                                    <span className="text-lg font-bold text-white">CadeteSiempre</span>
                                </Link>
                            </div>

                            <div className="hidden h-full lg:flex">
                                <div className="inset-x-0 bottom-0 px-4">
                                    <div className="flex h-full justify-center space-x-8">
                                        <MenuNav navigation={mainNav} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 items-center lg:hidden">
                                <MovilMenu />
                            </div>

                            <div className="flex flex-1 items-center justify-end gap-3">
                                <Link href="/consulta" className="text-white block lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </Link>
                                <MenuNav navigation={secondaryNavigation} />
                                <div className="ml-4 flow-root lg:ml-8">
                                    <ButtonCart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}