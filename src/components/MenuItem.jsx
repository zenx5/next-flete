import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { SquaresPlusIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function MenuItem({ items = [] }) {

    return <Popover className="relative md:z-1 z-20">
        <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
        >
            <Popover.Panel className="absolute left-[-100px]">
                <div className="w-screen max-w-fit flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                    {items.map((item) => (
                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                            <div className="mt-1 flex py-1 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white gap-4">
                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                {
                                    item.href!=='#' ?
                                    <Link href={item.href} className="font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </Link> :
                                    <button onClick={item?.onClick} className="font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </button>
                                }
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>
}