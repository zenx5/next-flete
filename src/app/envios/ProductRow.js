import { ROUTER_PATH } from "@/tools/constants"
import Link from "next/link"
import { DeleteIcon, EditIcon, OpenIcon } from "@/components/icons"
import RowCardMobile from "./RowCardMobile"
import ProductsModel from "@/tools/models/ProductsModel"
import { setToast } from "../../components/ToastProvider"

// Importaciones de prueba
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  
]

// cierre de omportaciones de prueba

export default function ProductRow({ item, fields, isAdmin, isOwner }) {

    const formater = (value, formatAction) => {
        if( formatAction ) {
            return formatAction(value, item, (isAdmin || isOwner))
        }
        return value
    }

    const handlerDelete = async () => {
        try{
            await ProductsModel.delete(item?.id)
            setToast("Flete eliminado", "success")
        } catch(error){
            console.error(error.message)
            setToast(error.message, "error")
        }
    }

    return <>
        <tr className="text-inherit hidden xl:table-row align-middle outline-none bg-opacity-50 hover:bg-opacity-100 bg-slate-200 ">
            { fields.map(
                field => <td
                    key={'field-item-'+field.id}
                    className="leading-6 text-sm font-normal table-cell text-left text-[#212B36] px-4 py-6 border-b-0"
                >{ formater(item[field.id], field?.format) }</td>
            ) }
            <td className="leading-6 text-sm font-normal text-center text-[#212B36] border-b-0 gap-1">
                <span className="flex flex-row gap-1 px-2 justify-between border-4 border-red-500">
                    { (isAdmin || isOwner) && <button onClick={handlerDelete} className="py-1 px-1 rounded-md border-2 border-red-600 hover:bg-red-600 text-red-600 bg-transparent hover:text-white uppercase text-sm" >
                        <DeleteIcon />
                    </button>}
                    { (isAdmin || isOwner) && <Link className="py-1 px-1 rounded-md border-2 border-blue-600 hover:bg-blue-600 text-blue-600 bg-transparent hover:text-white uppercase text-sm" href={`?modal=edit-auction&params=id&id=${item.id}`}>
                        <EditIcon />
                    </Link>}
                    <Link className="py-1 px-1 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white bg-transparent text-green-600 uppercase text-sm" href={`${ROUTER_PATH.PRODUCTS}/${item.id}`}>
                        <OpenIcon />
                    </Link>
                </span>
                { (isAdmin || isOwner) && <span className="block pt-1">
                    <Link href={`${ROUTER_PATH.PRODUCTS}/${item.id}/details`} className="block border border-gray-400 py-1 px-4 text-gray-600 hover:bg-gray-300 hover:text-gray-800 rounded-md">Details</Link>
                </span>}
                
                // desplegable de prueba                
                         <Popover className="relative z-50">
                            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                <span>Solutions</span>
                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
                                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                <div className="w-screen max-w-fit flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                    {solutions.map((item) => (
                                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <a href={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                            </a>
                                        
                                        </div>
                                        </div>
                                    ))}
                                    </div>                                    
                                </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>           

                // Cierre de desplegable de prueba

            </td>
        </tr>
        <tr>
            <RowCardMobile
                name={ formater(item['name'], fields.find( field=> field.id==='name')?.format) }
                from={ formater(item['from'], fields.find( field=> field.id==='from')?.format) }
                to={ formater(item['to'], fields.find( field=> field.id==='to')?.format) }
                dimensions={ formater(item['dimensions'], fields.find( field=> field.id==='dimensions')?.format) }
                weight={ formater(item['weight'], fields.find( field=> field.id==='weight')?.format) }
                status={ formater(item['status'], fields.find( field=> field.id==='status')?.format) }
                isAdmin={isAdmin}
                isOwner={isOwner}
                onDelete={handlerDelete}
            />
        </tr>
    </>
}