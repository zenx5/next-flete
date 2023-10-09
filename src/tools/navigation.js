import { ROUTER_ID, ROUTER_PATH } from './constants'

export const mainNavigation = [
    { id:ROUTER_ID.HOME, name:'Home', href:ROUTER_PATH.HOME },
    { id:ROUTER_ID.ABOUT, name:'Sobre Nosotros', href:ROUTER_PATH.ABOUT },
    { id:ROUTER_ID.PRODUCTS, name:'Fletes', href:ROUTER_PATH.PRODUCTS },
]

export const secondaryNavigation = [
    { id:ROUTER_ID.LOGIN, name:'Iniciar Sesión', href:ROUTER_PATH.LOGIN, className:"flex items-center text-sm font-medium text-[#4b4b4b] uppercase" },
    { id:ROUTER_ID.LOGOUT, name:'Cerrar Sesión', action:'logout', className:"flex items-center text-sm font-medium text-[#4b4b4b] uppercase" },
    { id:ROUTER_ID.REGISTER, name:'Registro', href:ROUTER_PATH.REGISTER, className:"flex items-center text-sm font-medium text-[#4b4b4b] px-10 py-2 uppercase bg-[#002361] text-white" },
]