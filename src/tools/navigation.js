import { UserIcon } from '../components/icons'
import { ROUTER_ID, ROUTER_PATH } from './constants'

export const mainNavigation = [
    { id:ROUTER_ID.HOME, name:'Home', href:ROUTER_PATH.HOME },
    { id:ROUTER_ID.ABOUT, name:'Sobre Nosotros', href:ROUTER_PATH.ABOUT },
    { id:ROUTER_ID.PRODUCTS, name:'Fletes', href:ROUTER_PATH.PRODUCTS },
]

export const secondaryNavigation = [
    { id:ROUTER_ID.LOGIN, name:'Iniciar Sesión', href:ROUTER_PATH.LOGIN, className:"flex items-center text-sm font-medium text-[#4b4b4b] uppercase" },
    { id:ROUTER_ID.LOGOUT, name:'Cerrar Sesión', action:'logout', className:"flex items-center text-sm font-medium text-[#4b4b4b] px-10 py-2 uppercase border border-transparent hover:text-orange-flete hover:border-orange-flete" },
    { id:ROUTER_ID.REGISTER, name:'Registro', href:ROUTER_PATH.REGISTER, className:"flex items-center text-sm font-medium text-[#4b4b4b] px-10 py-2 uppercase bg-[#002361] text-white" },
    {
        id:ROUTER_ID.PROFILE,
        name: <span className="flex flex-row items-center border border-azul-flete text-azul-flete py-1 px-8 hover:text-orange-flete hover:border-orange-flete">
            <p>PERFIL</p>
            <UserIcon className="w-6 h-6"/>
        </span>,
        href:ROUTER_PATH.PROFILE
    }
]