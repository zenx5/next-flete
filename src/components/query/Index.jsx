'use client'
import InputSearch from "../InputSearch"
import LineInput from "../LineInput"
import Card from "../Card"
import sampleDiploma from "../../../public/ImagesCadeteSiempre/diplomaMuestra.jpeg"
import Image from "next/image"

export default function Index({ data, error }) {



    return <div className="p-1 bg-slate-200">
        <form className="p-4 mb-2 border-b border-gray-400 bg-white">
            <p className="text-center m-3">Ingrese su consulta aquí</p>
            <InputSearch placeholder="Consultar..." name="query" />
            <small className="mt-1 text-red-700 italic text-center w-full block h-[20px]">{error}</small>
        </form>
        {data?.nombre ? <div className="mt-5 m-2 mx-auto w-full md:w-8/12 flex flex-col gap-5">
            <Card title="Datos Personales">
                <span className="flex lg:flex-row w-full flex-col">
                    <span className="flex flex-col items-center">
                        <span className="border-2 m-2 flex w-32 h-32 flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </span>
                        <p className="text-center italic mx-2">note here</p>
                    </span>
                    <span className="w-full m-2 gap-2 flex flex-col">
                        <LineInput label="Nombre" value={data?.nombre} />
                        <LineInput label="Cedula" value={data?.cedula} />
                        <LineInput label="Telefono" value={data?.telefono} />
                        <LineInput label="Email" value={data?.email} />
                    </span>
                </span>
            </Card>
            <Card title="Diploma">
                <div className="w-full max-h-64 overflow-y-hidden flex justify-center items-center">
                    <Image src={sampleDiploma} width={600} height={100} />
                </div>
                <div className="relative h-2 bottom-24 ">
                    <button className="bg-black bg-opacity-25 w-full py-10 text-white hover:bg-opacity-70">
                        Descargar
                    </button>
                </div>
            </Card>
            {/* { data?.items && <Card title="Pedidos">
                <ul>
                    {data?.items?.map( (item, index) => <li key={index} className="flex flex-row justify-between mx-10 p-2 border-b">
                        <p className="font-bold">{item.nombre}</p>
                        <p className="italic">{item.precio}</p>
                    </li>)}
                    <li className="flex flex-row justify-end mx-10 p-2 mt-4">
                        <p className="italic font-bold">Total: { data.itemsTotal }</p>
                    </li>
                </ul>
            </Card>} */}
        </div> :
            <div className="mt-5 m-2 mx-auto w-full md:w-8/12 flex flex-col gap-5 bg-white p-5">
                <p className="text-center text-lg">Ingresa su numero de documento para hacer la consulta de su diploma</p>
                <div className="w-full flex justify-center items-center">
                    <Image src={sampleDiploma} width={300} height={100} />
                </div>

            </div>}

    </div>
}

