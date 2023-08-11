'use client'

import { useRouter } from "next/navigation"

export default function Layout({ children }){
    const router = useRouter()

    return <main className="w-screen h-auto flex justify-center items-center py-10 bg-gray-50">
        <form  className="px-4 py-8 border-2 border-blue-400 rounded-md shadow-md shadow-gray-200 bg-white">
            {children}
            <button onClick={()=>router.push('/usuario/perfil')} className="w-full text-white bg-blue-500 font-bold border border-blue-500 p-3 my-4 rounded hover:bg-blue-600">Enviar</button>
            {/* <a href="#" className="block w-full text-blue-500 text-center border border-blue-500 p-3 rounded hover:bg-blue-500 hover:text-white">Acceder</a> */}
        </form>
    </main>
}