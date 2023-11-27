import ProductsModel from "@/tools/models/ProductsModel";
import MapAuction from '@/components/modals/MapAuction';

export default async function Page({params}) {
    const { id } = params;

    const product = await ProductsModel.get(id)

    return <div className="mx-20 mt-10 h-screen" data-id={id}>
        <div className="w-full border-b border-gray-400 py-4 mb-5">
            <h1 className="text-3xl uppercase font-bold">{product.name}</h1>
        </div>
        <div className="flex flex-row gap-4 justify-between">
            <MapAuction auctionId={id} className="w-1/2 p-2"/>
            <div className="w-1/2 p-2">
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
            </div>
        </div>
    </div>
}