import MenuNav from './MenuNav';
import Image from 'next/image';
import { mainNavigation, secondaryNavigation } from '@/tools/navigation';
import MovilMenu from './MovilMenu';
import { getUser, isAuthenticated } from '@/tools/actions';
import { ROUTER_ID } from '@/tools/constants';
import logo from '../../../public/images/logo.jpeg'

export default async function CustomHeader() {

    const isAuthenticatedBool = await isAuthenticated()
    const user = await getUser()


    const mainNav = mainNavigation.filter( item => {
        if( isAuthenticatedBool ) { // Si esta autenticado
            return item.id!==ROUTER_ID.LOGIN
        }
        // Si no esta autenticado
        return item.id!==ROUTER_ID.PROFILE && item.id!==ROUTER_ID.PRODUCTS
    } )

    const accessNav = secondaryNavigation.filter( item => {
        if( isAuthenticatedBool ) {
            return item.id!==ROUTER_ID.LOGIN && item.id!==ROUTER_ID.REGISTER
        }
        return item.id!==ROUTER_ID.LOGOUT && item.id!==ROUTER_ID.PROFILE
    })

    return <header className="">
        <div className="flex flex-row items-center gap-10 w-10/12 mx-auto justify-between">
            <div>
                <Image src={logo} alt="" width={250} height={200} />
            </div>
            <div className="hidden h-full lg:flex justify-center space-x-8 items-center">
                <MenuNav navigation={mainNav} />
            </div>
            <div className="hidden h-full lg:flex justify-center space-x-4 items-center">
                <MenuNav navigation={accessNav} />
            </div>
            <div className="flex lg:hidden">
                <MovilMenu navigation={[...mainNav, ...accessNav.map( item => ({ ...item, className:undefined }))]}/>
            </div>
        </div>
    </header>
}