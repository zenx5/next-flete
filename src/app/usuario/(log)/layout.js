import { ROUTER_PATH } from "@/tools/constants"
import { getError } from "@/tools/actions"

export default async function Layout({ children }){
    const error = getError()

    return <main className="w-screen h-auto min-h-[650px] flex justify-center items-center py-10 bg-gray-50">
        <form
            className="py-8 border-2 border-orange-flete rounded-md shadow-md shadow-gray-200 bg-white px-8"
            method="post"
            action={ROUTER_PATH.API.USER}
        >
            {children}
            <input type="hidden" name="redirect" value={ROUTER_PATH.HOME} />
            <button type="submit" className="w-full text-white bg-orange-flete font-bold border border-orange-flete p-3 my-4 rounded hover:bg-orange-flete-2">Enviar</button>
            <p className="text-center text-red-600 italic">{error.message}</p>
        </form>
    </main>
}