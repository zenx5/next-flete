import { ROUTER_PATH } from "@/tools/constants"
import { headers } from "next/headers"
import { getError } from "../../../tools/actions"

export default async function Layout({ children }){
    const error = getError()

    return <main className="w-screen h-auto flex justify-center items-center py-10 bg-gray-50">
        <form
            className="px-4 py-8 border-2 border-blue-400 rounded-md shadow-md shadow-gray-200 bg-white"
            method="post"
            action={ROUTER_PATH.API.USER}
        >
            {children}
            <input type="hidden" name="redirect" value={ROUTER_PATH.HOME} />
            <button type="submit" className="w-full text-white bg-blue-500 font-bold border border-blue-500 p-3 my-4 rounded hover:bg-blue-600">Enviar</button>
            <p className="text-center text-red-600 italic">{error.message}</p>
        </form>
    </main>
}