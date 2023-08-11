'use client'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Disclosure, Menu, RadioGroup, Switch, Transition } from
  '@headlessui/react'
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from
  '@heroicons/react/20/solid'
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import LineInput from './LineInput'
import Modal from './Modal'
import Card from './Card'

const user = {
  name: 'Lisa Marie',
  email: 'lisamarie@example.com',
  imageUrl:

    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
}

const subNavigation = [
  { name: 'Perfil', href: 0, icon: UserCircleIcon, current: false },
  { name: 'Contraseña', href: 1, icon: KeyIcon, current: false },
  { name: 'Historial de Pedidos y Pagos', href: 2, icon: CreditCardIcon, current: false },
]

const payments = [
  {
    id: 1,
    date: '1/1/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$100.00',
    href: '#',
    nroRecibo: "0000000001",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
    cliente: "Cesar Vallenilla",
    identification: "25217739"
  },
  {
    id: 2,
    date: '22/2/2023',
    datetime: '2020-01-01',
    description: '4 Productos',
    amount: '$200.00',
    href: '#',
    nroRecibo: "0000000002",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 3",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 4",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
    client: "Cesar Vallenilla",
    identification: "25217739"
  },
  {
    id: 3,
    date: '10/4/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$100.00',
    href: '#',
    nroRecibo: "0000000002",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
    cliente: "Cesar Vallenilla",
    identification: "25217739"
  },
  // More payments...
]

const orders = [
  {
    id: 1,
    date: '28/7/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$100.00',
    status: 'pendiente',
    href: '#',
    cliente: "Cesar Vallenilla",
    identification: "25217739",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }]
  },
  {
    id: 2,
    date: '13/6/2023',
    datetime: '2020-01-01',
    description: '4 Productos',
    status: 'pagado',
    amount: '$200.00',
    href: '#',
    cliente: "Cesar Vallenilla",
    identification: "25217739",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 3",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 4",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
  },
  {
    id: 3,
    date: '09/5/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$70.00',
    status: 'pagado',
    href: '#',
    cliente: "Cesar Vallenilla",
    identification: "25217739",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }]
  },
  // More payments...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function PerfilComponent() {
  const [selected, setSelected] = useState(0)

  let initialModalState = {
    billsModal: false,
    ordersModal: false,
    succesModal: false,
  }

  const [modalState, setModalState] = useState(initialModalState)


  return (
    <>
      <div className="h-full">
        <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
              <nav className="space-y-1">
                {subNavigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelected(item.href)}
                    className={classNames(
                      item.href === selected
                        ? 'bg-black text-white'
                        : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center w-full rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-orange-500' : 'text-gray-400 group - hover:text-gray-500',
                        '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                      )}
                    />
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </nav>
            </aside>
            {
              selected === 0 &&
              <div className='h-screen w-full col-start-5 col-span-7 lg:border-black lg:border lg:rounded-lg'>
                <div className='flex justify-center w-full bg-black overflow-hidden rounded-t-lg'>

                  <div className="relative w-40 h-40 overflow-hidden bg-gray-100 top-12 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-32 h-32 text-gray-400 left-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </div>

                </div>

                <div className=' grid grid-cols-2 gap-5 mt-10 bg-white'>
                  <h1 className='text-center text-xl font-bold col-span-full'>Datos de Perfil</h1>
                  <div className='flex flex-col text-center'>
                    <label>
                      Nombre
                    </label>
                    <p className='text-slate-600'>Cesar</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Apellido
                    </label>
                    <p className='text-slate-600'>Vallenilla</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Fecha Nacimiento
                    </label>
                    <p className='text-slate-600'>02/11/1995</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Email
                    </label>
                    <p className='text-slate-600'>cesarev17@gmail.com</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Telefono
                    </label>
                    <p className='text-slate-600'>1137966282</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Telefono Familiar
                    </label>
                    <p className='text-slate-600'>4241397963</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Academia
                    </label>
                    <p className='text-slate-600'>Aviacion Militar Balivariana</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Grado
                    </label>
                    <p className='text-slate-600'>Grado 1</p>
                  </div>
                  <div className='flex flex-col text-center'>
                    <label>
                      Grado Siguiente
                    </label>
                    <p className='text-slate-600'>Grado 2</p>
                  </div>
                </div>
              </div>
            }
            {
              selected === 1 && <div className='h-screen w-full col-start-5 col-span-7'>
                <h1 className='text-center text-xl font-bold'>Actualizar Contraseña</h1>
                <div className='flex flex-col items-center gap-7'>
                  <div className='flex flex-col gap-10 w-2/3 items-center mt-7'>
                    <div className='flex flex-col w-full gap-4'>
                      <label className='font-bold'>
                        Contraseña Anterior
                      </label>
                      <input className='border rounded-md px-4 py-2' type='password' placeholder='********' />
                    </div>
                    <div className='flex flex-col w-full gap-4'>
                      <label className='font-bold'>
                        Contraseña Nueva
                      </label>
                      <input className='border rounded-md px-4 py-2' type='password' placeholder='********' />
                    </div>
                    <div className='w-full flex justify-end'>
                      <button onClick={() => setModalState(prevState => ({ ...prevState, succesModal: true }))} className="flex w-full  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Actualizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
            {
              selected === 2 && <div className='h-screen w-full col-start-5 col-span-7'>
                <h1></h1>
                <section aria-labelledby="billing-history-heading">
                  <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
                    <div className="px-4 sm:px-6">
                      <h2 id="billing-history-heading" className="text-lg font-medium leading-6 text-gray-900">
                        Historial de Pagos
                      </h2>
                    </div>
                    <div className="mt-6 flex flex-col">
                      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                          <div className="overflow-hidden border-t border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Fecha
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Descripcion
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Monto
                                  </th>

                                  <th
                                    scope="col"
                                    className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                                  >
                                    <span className="sr-only">Ver recibo</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-white">
                                {payments.map((payment) => (
                                  <tr key={payment.id}>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                      <time dateTime={payment.datetime}>{payment.date}</time>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                      {payment.description}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                      {payment.amount}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                      <button onClick={() => setModalState(prev => ({ ...prev, billsModal: payment }))} className="text-orange-600 ">
                                        Ver recibo
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white pt-6 shadow mt-7 sm:overflow-hidden sm:rounded-md">
                    <div className="px-4 sm:px-6">
                      <h2 id="billing-history-heading" className="text-lg font-medium leading-6 text-gray-900">
                        Historial de Pedidos
                      </h2>
                    </div>
                    <div className="mt-10 flex flex-col">
                      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                          <div className="overflow-hidden border-t border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Fecha
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Descripcion
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Monto
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Estatus
                                  </th>
                                  <th
                                    scope="col"
                                    className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                                  >
                                    <span className="sr-only">Detalle</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-white">
                                {orders.map((payment) => (
                                  <tr key={payment.id}>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                      <time dateTime={payment.datetime}>{payment.date}</time>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                      {payment.description}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                      {payment.amount}
                                    </td>
                                    <td className={`whitespace-nowrap px-6 py-4 text-sm text-gray-500 ${payment.status === "pendiente" && "text-red-600"} ${payment.status === "por confirmar" && "text-yellow-600"} ${payment.status === "pagado" && "text-green-600"}`}>
                                      {payment.status}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                      <button onClick={() => { setModalState(prev => ({ ...prev, ordersModal: payment })) }} className="text-orange-600  py-1 px-2 ">
                                        Detalle
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            }

          </div >
        </main >
      </div >
      {
        modalState.billsModal && <Modal>
          <Card title={'Recibo'}>
            <div className='grid grid-cols-2 gap-4 mt-7'>
              <p className='col-span-full'><b>Numero de Recibo: </b>{modalState.billsModal?.nroRecibo}</p>
              <p className=''><b>Cliente: </b>{modalState.billsModal?.client}</p>
              <p className=''><b>Identificacion: </b>{modalState.billsModal?.identification}</p>
              <p className=''><b>Fecha: </b>{modalState.billsModal?.date}</p>
              <p className=''><b>Descripcion: </b>{modalState.billsModal?.description}</p>
              <p className=''><b>Total: </b>{modalState.billsModal?.amount}</p>
              <h1 className='w-full text-center col-span-full font-bold'>Productos</h1>
              <div className='col-span-full max-h-44 overflow-auto grid grid-cols-2 gap-3'>
                {
                  modalState.billsModal?.details.map((el, id) => (<div className='border border-black p-3 rounded-md' key={id}>
                    <p><b>Producto: </b>{el?.name}</p>
                    <p><b>Descripcion: </b>{el?.descrip}</p>
                    <p><b>Precio: </b>{el?.amount}</p>
                    <p><b>Cantidad: </b>{el?.qty}</p>
                  </div>))
                }

              </div>
            </div>
            <div className='flex gap-2'>
              <button onClick={() => setModalState(prevState => ({ ...prevState, billsModal: false }))} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Cerrar</button>
              <button onClick={() => setModalState(prevState => ({ ...prevState, billsModal: false }))} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Descargar</button>
            </div>
          </Card>
        </Modal>
      }
      {
        modalState.ordersModal && <Modal onClose={() => setModalState(prevState => ({ ...prevState, ordersModal: false }))}>
          <Card title={'Ordenes'}>
            <div className='grid grid-cols-2 gap-4 mt-7'>
              <p className=''><b>Cliente: </b>{modalState.ordersModal?.client}</p>
              <p className=''><b>Identificacion: </b>{modalState.ordersModal?.identification}</p>
              <p className=''><b>Fecha: </b>{modalState.ordersModal?.date}</p>
              <p className=''><b>Descripcion: </b>{modalState.ordersModal?.description}</p>
              <p className=''><b>Total: </b>{modalState.ordersModal?.amount}</p>
              <h1 className='w-full text-center col-span-full font-bold'>Productos</h1>
              <div className='col-span-full max-h-44 overflow-auto grid grid-cols-2 gap-3'>
                {
                  modalState.ordersModal?.details.map((el, id) => (<div className='border border-black p-3 rounded-md' key={id}>
                    <p><b>Producto: </b>{el?.name}</p>
                    <p><b>Descripcion: </b>{el?.descrip}</p>
                    <p><b>Precio: </b>{el?.amount}</p>
                    <p><b>Cantidad: </b>{el?.qty}</p>
                  </div>))
                }
              </div>
              {
                modalState.ordersModal?.status === "pendiente" ?
                  <div className='flex flex-col items-center col-span-full'>
                    <h1>Pedido pendiente por pagar</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-28 h-28 ${modalState.ordersModal?.status === "pendiente" && 'text-yellow-500'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div> :
                  <div className='flex flex-col items-center col-span-full'>
                    <h1 className='font-bold'>Pedido Pagado</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-28 h-28 ${modalState.ordersModal?.status === "pagado" && 'text-green-500'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                  </div>
              }
            </div>
            <div className='flex gap-2'>
              <button onClick={() => setModalState(prevState => ({ ...prevState, ordersModal: false }))} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Cerrar</button>
              {modalState.ordersModal?.status === "pendiente" && <button onClick={() => setModalState(prevState => ({ ...prevState, ordersModal: false }))} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Pagar</button>}
            </div>
          </Card>
        </Modal>
      }
      {
        modalState.succesModal && <Modal>
          <Card title={'Contraseña'}>
            <div className='flex flex-col justify-center items-center gap-4 mt-4'>
              <h1 className='text-xl'>Contraseña actualizada con exito</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-28 h-28 text-center text-green-500`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div className='flex gap-2'>
              <button onClick={() => setModalState(prevState => ({ ...prevState, succesModal: false }))} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Cerrar</button>
            </div>
          </Card>
        </Modal>
      }
    </>
  )
}

