"use client";
import { useState } from "react";
import OverlayModal from "@/components/OverlayModal";
import Card from "@/components/Card";
import Link from "next/link";

export default function History({ payments = [], orders = []}) {
    const [modalState, setModalState] = useState(null)

    return <div className='h-screen w-full col-start-5 col-span-7'>
      <section aria-labelledby="billing-history-heading">
        <div className="bg-white pt-0 shadow sm:overflow-hidden sm:rounded-md">
        <div className="mt-0 divide-y divide-gray-200">
            <div className="space-y-1 px-3">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Historial de Pagos</h3>
              <p className="max-w-2xl text-sm text-gray-500">Mantente al tanto de tus ultimos pagos</p>
            </div>
            <div className="mt-6">
              <dl className="divide-y divide-gray-200 px-3">
                {payments.map((payment) => <div key={payment.id} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">{payment.date}</dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">{payment.description}</span>
                    <span className="flex-grow">{payment.amount}</span>
                    <span className="flex-grow">{payment.status}</span>
                    <span className="ml-4 flex-shrink-0">
                      <button
                        onClick={() => setModalState(prevState => payment )}
                        className="rounded-md bg-white font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Detalle
                      </button>
                    </span>
                  </dd>
                </div>)}
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                  <dt className="text-sm font-medium text-gray-500"></dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">8 Proudctos</span>
                    <span className="flex-grow">$370</span>
                    <span className="flex-grow"></span>
                    <span className="flex-grow"></span>
                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white pt-6 shadow mt-7 sm:overflow-hidden sm:rounded-md">
            <div className="mt-10 divide-y divide-gray-200">
              <div className="space-y-1 px-3">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Historial de Pedidos</h3>
                <p className="max-w-2xl text-sm text-gray-500">Mantente al tanto de tus ultimos pedidos</p>
              </div>
              <div className="mt-6">
                <dl className="divide-y divide-gray-200 px-3">
                  {orders.map((order) => <div key={order.id} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">{order.date}</dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">{order.description}</span>
                      <span className="flex-grow">{order.amount}</span>
                      <span className="flex-grow">{order.status}</span>
                      <span className="ml-4 flex-shrink-0">
                        <Link
                          href={`/detalles-orden/${order.id}`}
                          className="rounded-md bg-white font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                          Detalle
                        </Link>
                      </span>
                    </dd>
                  </div>)}
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">8 Proudctos</span>
                      <span className="flex-grow">$370</span>
                      <span className="flex-grow"></span>
                      <span className="flex-grow"></span>
                      <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
        </div>
      </section>
      { modalState!==null && <OverlayModal className="fixed flex flex-col justify-center items-start top-20">
        <Card title={'Recibo'} className="inset-0 z-10 mt-20">
          <div className='grid grid-cols-2 gap-4 mt-7'>
            <p className='col-span-full'><b>Numero de Recibo: </b>{modalState?.nroRecibo}</p>
            <p className=''><b>Cliente: </b>{modalState?.client}</p>
            <p className=''><b>Identificacion: </b>{modalState?.identification}</p>
            <p className=''><b>Fecha: </b>{modalState?.date}</p>
            <p className=''><b>Descripcion: </b>{modalState?.description}</p>
            <p className=''><b>Total: </b>{modalState?.amount}</p>
            <h1 className='w-full text-center col-span-full font-bold'>Productos</h1>
            <div className='col-span-full max-h-44 overflow-auto grid grid-cols-2 gap-3'>
              {
                modalState?.details.map((el, id) => (<div className='border border-black p-3 rounded-md' key={id}>
                  <p><b>Producto: </b>{el?.name}</p>
                  <p><b>Descripcion: </b>{el?.descrip}</p>
                  <p><b>Precio: </b>{el?.amount}</p>
                  <p><b>Cantidad: </b>{el?.qty}</p>
                </div>))
              }

            </div>
          </div>
          <div className='flex gap-2'>
            <button onClick={() => setModalState(prevState => null)} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Cerrar</button>
            <button onClick={() => setModalState(prevState => null)} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Descargar</button>
          </div>
        </Card>
      </OverlayModal>}
    </div>
}