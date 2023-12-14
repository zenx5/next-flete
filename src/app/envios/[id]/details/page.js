import ProductsModel from "@/tools/models/ProductsModel";
import MapAuction from '@/components/modals/MapAuction';
import { getUser } from "@/tools/actions/user";
import CommentsModel from "@/tools/models/CommentsModel"
import Staring from "@/components/Staring"
import { UserIcon } from "@heroicons/react/20/solid";

export default async function Page({params}) {
    const { id } = params;
    const user = await getUser()

    const product = await ProductsModel.get(id)
    const comments = await CommentsModel.search("userId", user.id)


    console.log( product )

    return <div className="mx-20 mt-10 h-screen" data-id={id}>
        <div className="w-full border-b border-gray-400 py-4 mb-5">
            <h1 className="text-3xl uppercase font-bold">{product.name}</h1>
        </div>
        <div className="flex flex-row gap-4 justify-between">
            <div className="w-1/2 flex flex-col gap-1">
                <MapAuction auctionId={id} className="w-full p-2"/>
                <div className="w-full h-52 flex flex-row gap-2 p-2">
                    <div className="w-40 h-full">
                        <UserIcon className="text-slate-800 border border-slate-800 rounded-full p-0"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <div className="w-full h-2/3 divide-y">
                            <p className="flex flex-row justify-between px-4 py-1">
                                <span className="font-bold">Trasportista:</span>
                                <span className="italic text-slate-600">{product?.assignAt?.user.name ?? '-'}</span>
                            </p>
                            <p className="flex flex-row justify-between px-4 py-1">
                                <span className="font-bold">Email:</span>
                                <span className="italic text-slate-600">{product?.assignAt?.user.email ?? '-'}</span>
                            </p>
                            <p className="flex flex-row justify-between px-4 py-1">
                                <span className="font-bold">Telefono:</span>
                                <span className="italic text-slate-600">{product?.assignAt?.user.phone ?? '-'}</span>
                            </p>
                        </div>
                        <div className="w-full h-1/3">
                            <Staring
                                average={comments.map( comment => comment.rating ).reduce( (a,e)=>a+e, 0 )/comments.length}
                                totalCount={comments.length}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-2 justify-between items-center border-t border-gray-400 pt-4">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    {product?.auctions
                        ?.sort( (a,b) => a.mount>b.mount ? 1 : -1 )
                        ?.map( (item, index) => <span key={item?.mount}  className={"flex flex-col px-2 border shadow-md rounded-full items-center text-sm gap-1 p-1 " + (index===product?.assignAt?.index ? "border-green-600" : "border-slate-400") }>
                        <span className={index===product?.assignAt?.index ? "text-green-700" : "text-slate-700"}>{item?.user?.email}</span>
                        <span className={index===product?.assignAt?.index ? "text-xs text-green-600 italic" : "text-xs text-slate-600 italic"}>$ {item?.mount}</span>
                    </span>)}
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

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
                    <div className="pl-2 border-b border-slate-300 py-3">
                        <span className="flex flex-row justify-between items-center">
                            <h3 className="text-xl">Acciones</h3>
                            <span></span>
                        </span>
                        <span>
                        </span>
                    </div>
                    <div>{user.email}</div>
                    <div>{product?.createdBy?.email}</div>
                    <div>{product?.assignAt?.user.email}</div>
                    { product?.createdBy?.id===user.id && <div>Creador</div> }
                    { product?.assignAt?.id===user.id && <div>Asignado</div> }
                </div>
            </div>
        </div>
    </div>
}