"use client";

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import PopupCart from './cart/PopupCart';


const currencies = ['BS', 'USD']
const navigation = {
  pages: [
    { name: 'Productos', href: '/productos' },
    { name: 'Perfil', href: '/usuario/perfil' },
  ],
}


export default function CustomHeader() {
    const [open, setOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [quantity, setQuantity] = useState(0)
    const router = useRouter()

    const handlerPopup = () => {
        setOpen( prev => !prev )
    }

    return <>
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                    <div className="flex px-4 pb-2 pt-5">
                        <button
                        type="button"
                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                        onClick={() => setMobileMenuOpen(false)}
                        >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Links */}
                    <Tab.Group as="div" className="mt-2">
                        <Tab.Panels as={Fragment}>
                        </Tab.Panels>
                    </Tab.Group>

                    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        {navigation.pages.map((page) => (
                        <div key={page.name} className="flow-root">
                            <button onClick={()=>router.push(page.href)} className="-m-2 block p-2 font-medium text-gray-900">
                            {page.name}
                            </button>
                        </div>
                        ))}
                    </div>

                    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        <div className="flow-root">
                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                            Crear cuenta
                        </a>
                        </div>
                        <div className="flow-root">
                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                            Ingresar
                        </a>
                        </div>
                    </div>

                    
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
        <header className="relative z-10 bg-black">
            <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                    <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                        <button onClick={() => router.push('/')}>
                        <span className="text-lg font-bold text-white">CadeteSiempre</span>
                        </button>
                    </div>

                    <div className="hidden h-full lg:flex">
                        {/* Flyout menus */}
                        <Popover.Group className="inset-x-0 bottom-0 px-4">
                        <div className="flex h-full justify-center space-x-8">
                            {navigation.pages.map((page) => (
                            <button
                                key={page.name}
                                onClick={()=>router.push(page.href)}
                                className="flex items-center text-sm font-medium text-white"
                            >
                                {page.name}
                            </button>
                            ))}
                        </div>
                        </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                        <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Logo (lg-) */}
                    <button onClick={()=>router.push('/')} className="lg:hidden">
                        <img src="/images/krosty_shop_blanco.webp" alt="" className="h-8 w-auto" />
                    </button>

                    <div className="flex flex-1 items-center justify-end">
                        <button onClick={() => { router.push('/consulta') }} className="hidden text-sm font-medium text-white lg:block">
                            Consultar
                        </button>
                        <button onClick={() => { router.push('/consulta') }} className="text-white block lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>

                        <div className="flex items-center lg:ml-8">
                        <button onClick={() => { router.push('/nosotros') }} className="hidden text-sm font-medium text-white lg:block">
                            Sobre Nosotros
                        </button>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-8">
                            <button onClick={handlerPopup} className="group -m-2 flex items-center p-2">
                                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                                <span className="ml-2 text-sm font-medium text-white">{quantity}</span>
                                <span className="sr-only">items in cart, view bag</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </header>
        { open && <PopupCart onClose={()=>setOpen(false)}/> }
    </>
}