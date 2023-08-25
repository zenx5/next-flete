import { ROUTER_ID, ROUTER_PATH } from './constants'

export const mainNavigation = [
    { id: ROUTER_ID.PRODUCTS, name: 'Productos', href: ROUTER_PATH.PRODUCTS },
    { id: ROUTER_ID.PROFILE, name: 'Perfil', href: ROUTER_PATH.PROFILE },
    { id: ROUTER_ID.LOGIN, name: 'Iniciar Sesion', href: ROUTER_PATH.LOGIN },
    { id: ROUTER_ID.LOGOUT, name: 'Cerrar Sesion', action: 'logout' },
]

export const secondaryNavigation = [
    { name:'Consultar', href:ROUTER_PATH.SEARCH, className:"hidden text-sm font-medium text-white lg:block" },
    { name:'Sobre Nosotros', href:ROUTER_PATH.ABOUT, className:"hidden text-sm font-medium text-white lg:block" }
]