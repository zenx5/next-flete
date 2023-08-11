"use client";

import { useState, Fragment } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuNav from './MenuNav';

import { mainNavigation, secondaryNavigation } from '@/tools/navigation';

export default function MovilMenu(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return <div>
        <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
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
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl">
                            <div className="flex justify-between px-4 pb-2 pt-5">
                                <button onClick={() => { router.push('/'); setMobileMenuOpen(false) }} className='text-white w-full text-lg font-bold'>CadeteSiempre</button>
                                <button
                                    type="button"
                                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
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
                                <MenuNav navigation={mainNavigation} movil onClick={()=>setMobileMenuOpen(false)}/>
                            </div>

                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                <MenuNav navigation={secondaryNavigation.map( item => ({...item, className:null}))} movil onClick={()=>setMobileMenuOpen(false)}/>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    </div>
}