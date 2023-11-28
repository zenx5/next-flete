import ProductsModel from "@/tools/models/ProductsModel";
import MapAuction from '@/components/modals/MapAuction';
import { getUser } from "@/tools/actions/user";

export default async function Page({params}) {
    const { id } = params;
    const user = await getUser()

    const product = await ProductsModel.get(id)

    return <div className="mx-20 mt-10 h-screen" data-id={id}>
        <div className="w-full border-b border-gray-400 py-4 mb-5">
            <h1 className="text-3xl uppercase font-bold">{product.name}, {user}</h1>
        </div>
        <div className="flex flex-row gap-4 justify-between">
            <div className="w-1/2 flex flex-col gap-1">
                <MapAuction auctionId={id} className="w-full p-2"/>
                <div className="w-full h-52 flex flex-row gap-2 p-2">
                    <div className="border border-red-500 w-40 h-full"></div>
                    <div className="w-full flex flex-col gap-1">
                        <div className="border border-red-500 w-full h-2/3"></div>
                        <div className="border border-red-500 w-full h-1/3"></div>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-2">
                    <span className="w-10 h-10 bg-green-200 flex flex-row items-center justify-center text-black">-</span>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map( item => <span key={item} className="w-20 h-10 border border-red-500"></span>)}
                    <span className="w-10 h-10 bg-green-200 flex flex-row items-center justify-center text-black">+</span>
                </div>
            </div>
            <div className="w-1/2">
                <div className="w-full p-2">
                    <h2 className="text-2xl font-semibold">Detalles de la Encomienda</h2>
                    <div className="pl-2 border-b border-slate-300 pb-3">
                        <h3 className="text-xl">Descripcion</h3>
                        <span>{ product.description }</span>
                    </div>
                    <div className="pl-2 border-b border-slate-300 py-3">
                        <span className="flex flex-row justify-between items-center">
                            <h3 className="text-xl">Status</h3>
                            <span className="uppercase rounded-full border border-green-400 px-2 bg-green-300 text-green-700 shadow-md shadow-green-400">{ product.status }</span>
                            <span></span>
                        </span>
                    </div>
                    { product?.createBy?.id===user.id && <div>Creador</div> }
                    { product?.assignAt?.id===user.id && <div>Asignado</div> }
                </div>
            </div>
        </div>
    </div>
}