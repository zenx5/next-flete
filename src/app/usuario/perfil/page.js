'use client'
import { useState } from 'react'
import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import Modal from '@/components/Modal'
import Card from '@/components/Card'

import Account from "./Account";
import PasswordChange from "./PasswordChange";
import History from "./History";


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



export default function PageProfile({ user }) {

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
                      item.href === selected ? 'border-orange-600 bg-orange-50 text-orange-600' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center border-l-4 py-2 px-3 text-base font-medium w-full'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.href === selected ? 'text-orange-500' : 'text-gray-400 group - hover:text-gray-500',
                        '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                      )}
                    />
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </nav>
            </aside>
            { selected === 0 && <Account user={user}/> }
            { selected === 1 && <PasswordChange onClick={() => setModalState(prevState => ({ ...prevState, succesModal: true }))} /> }
            { selected === 2 && <History payments={payments} orders={orders} /> }

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

