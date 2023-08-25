import { ROUTER_PATH } from './constants'

export const mainNavigation = [
    { name: 'Productos', href: ROUTER_PATH.PRODUCTS },
    { name: 'Perfil', href: ROUTER_PATH.PROFILE },
    { name: 'Iniciar Sesion', href: ROUTER_PATH.LOGIN },
]

export const secondaryNavigation = [
    { name:'Consultar', href:ROUTER_PATH.SEARCH, className:"hidden text-sm font-medium text-white lg:block" },
    { name:'Sobre Nosotros', href:ROUTER_PATH.ABOUT, className:"hidden text-sm font-medium text-white lg:block" }
]