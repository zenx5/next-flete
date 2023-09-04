"use client";
import { useState } from "react"
import Card from "@/components/Card"
import OverlayModal from "@/components/OverlayModal"

export default function PasswordChange(){
    const [open, setOpen] = useState(false)

    return <div className='h-screen w-full col-start-5 col-span-7'>
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
            <button onClick={()=>setOpen(true)} className="flex w-full  items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Actualizar
            </button>
            </div>
        </div>
        </div>
        {open && <OverlayModal className="flex justify-center items-center" onClick={()=>setOpen(false)}>
            <Card title={'Contraseña'} className="inset-0 z-10 w-1/2 h-1/2">
                <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                <h1 className='text-xl'>Contraseña actualizada con exito</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-28 h-28 text-center text-green-500`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                </div>
                <div className='flex gap-2'>
                {/* <button onClick={() => setModalState(prevState => ({ ...prevState, succesModal: false }))} className="flex w-full mt-10 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Cerrar</button> */}
                </div>
            </Card>
        </OverlayModal>}
    </div>
}