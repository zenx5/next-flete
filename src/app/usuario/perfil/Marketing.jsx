"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { actionDelete, actionSave, onSnap } from "@/tools/firebase/actions"

export default function Marketing(){
    const [sliders, setSliders] = useState([])
    const [slider, setSlider] = useState(null)
    const [current, setCurrent] = useState(1)
    const [confirmDelete, setConfirmDelete] = useState(false)

    useEffect(()=>{
        onSnap( process.env.NEXT_PUBLIC_ENTITY_SLIDER_NAME , data => {
            setSliders( prev => data )
            setSlider( data[ current - 1 ] )
        }, null)
    },[current])

    const handlerChange = step => () => {
        setSlider( sliders[current + step - 1] )
        setCurrent( prev => prev + step )
    }

    const handlerChangeCurrent = ( key, value) => {
        const newSlider = {
            ...slider,
            [key]: value
        }
        actionSave(process.env.NEXT_PUBLIC_ENTITY_SLIDER_NAME, newSlider, newSlider.id)
    }

    const handlerDelete = () => {
        actionDelete(process.env.NEXT_PUBLIC_ENTITY_SLIDER_NAME, slider.id )
        setCurrent( 1 )
        setConfirmDelete( false )
    }

    const uploadSlider = (event) => {
        const file = event.target.files[0]
        var reader = new FileReader();
        reader.onloadend = function() {
            actionSave(process.env.NEXT_PUBLIC_ENTITY_SLIDER_NAME, {
                src: reader.result,
                duration: 2000,
                isVisible: false
            })
        }
        reader.readAsDataURL(file);
    }

    return <div>
        <div className="flex flex-row justify-between px-4">
            <h1 className="text-2xl font-bold">Imagenes</h1>
            <label className="cursor-pointer block px-10 rounded-md bg-orange-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <input type="file" className="sr-only" onChange={uploadSlider} accept="image/jpeg, image/png, image/jpg" />
                Nuevo
            </label>
        </div>
        { sliders.length>0 ? <div className="flex flex-row">
            <div className="w-7/12 px-4 py-10 flex flex-col justify-between">
                <div className="w-full">
                    <Image src={slider?.src} alt="" width={500} height={500} className="w-full"/>
                </div>
                <div className="flex flex-row justify-between mt-4 w-full items-center">
                    <button className="disabled:bg-transparent disabled:text-slate-300 disabled:shadow-slate-500 hover:text-orange-500 hover:shadow-orange-500 shadow shadow-slate-500 px-6 py-1 rounded-md text-slate-500 active:text-orange-700 active:bg-orange-50" disabled={current===1} onClick={handlerChange(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <span className="text-slate-500"> { current } / {sliders.length} </span>
                    <button className="disabled:bg-transparent disabled:text-slate-300 disabled:shadow-slate-500 hover:text-orange-500 hover:shadow-orange-500 shadow shadow-slate-500 px-6 py-1 rounded-md text-slate-500 active:text-orange-700 active:bg-orange-50" disabled={current===sliders.length} onClick={handlerChange(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-5/12 px-4 py-10 border-l border-slate-400 gap-10 flex flex-col justify-between">
                <span className="flex flex-col w-full">
                    <label className="text-xl text-slate-500 mb-2 font-semibold">Duracion:</label>
                    <span className="flex flex-row gap-2 items-center pl-2 border border-slate-400 rounded justify-between overflow-hidden">
                        <span className="flex h-full items-center text-slate-500">ms</span>
                        <input type="number" className="p-3 border-none outline-none text-right " value={slider?.duration} onChange={event => handlerChangeCurrent('duration', event.target.value)}/>
                    </span>
                </span>
                <span className="flex flex-col w-full">
                    <label className="text-xl text-slate-500 mb-2 font-semibold">Visibilidad:</label>
                    <span className="pl-2">
                        <label className="relative inline-flex items-center cursor-pointer" >
                            <input type="checkbox" value="" onChange={() => handlerChangeCurrent('isVisible', !slider?.isVisible)} checked={slider?.isVisible} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="peer-checked:block hidden ml-8 text-sm font-medium text-gray-900 dark:text-gray-300">Visible</span>
                            <span className="peer-checked:hidden block ml-8 text-sm font-medium text-gray-900 dark:text-gray-300">Oculto</span>
                        </label>
                    </span>
                </span>
                <span className="flex flex-col w-full">
                    <label className="text-xl text-slate-500 mb-2 font-semibold">Eliminar:</label>
                    <label className="pl-2 my-2 flex flex-row gap-4 cursor-pointer">
                        <input type="checkbox" value="" className="peer sr-only" checked={confirmDelete} onChange={()=>setConfirmDelete(!confirmDelete)}/>
                        <span className="flex items-center justify-center px-2 py-1 border border-orange-600 w-fit rounded peer-checked:bg-orange-600">
                            <span className="font-bold text-sm text-white">X</span>
                        </span>
                        <span className="italic text-slate-500">¿Desea eliminar esta imagen?</span>
                    </label>
                    <button disabled={!confirmDelete} onClick={handlerDelete} className="disabled:bg-slate-500 pl-2 mt-3 block px-10 rounded-md bg-orange-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Eliminar</button>
                </span>
            </div>
        </div> : <div className="w-full py-10 text-xl text-slate-500 italic text-center"> - SIN DATOS - </div> }
    </div>
}