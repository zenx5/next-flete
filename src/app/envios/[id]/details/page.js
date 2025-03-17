import ProductsModel from "@/tools/models/ProductsModel"
import MapAuction from '@/components/modals/MapAuction'
import { getUser } from "@/tools/actions/user"
import CommentsModel from "@/tools/models/CommentsModel"
import { UserIcon } from "@heroicons/react/20/solid";
import { ROUTER_PATH, USER_TYPE } from "@/tools/constants";
import { redirect } from "next/navigation";
import ChatBox from "@/components/ChatBox"
import Dimensions from "./(sections)/Dimensions"
import CardCoor from "./(sections)/CardCoor"
import CurrentStatus from "./(sections)/CurrentStatus"
import CarrierDetails from "./(sections)/Carrier";

export default async function Page({params}) {
    const { id } = params;
    const user = await getUser()
    const product = await ProductsModel.get(id)

    if(
        product?.createdBy?.id!==user.id && //Creador
        product?.assignAt?.user?.id!==user.id && //Asignado
        user.type!==USER_TYPE.ADMIN // Administrador
    ) {
        redirect(ROUTER_PATH.PRODUCTS)
    }
    const comments = product?.assignAt?.id ? await CommentsModel.search("userId", product?.assignAt?.id) : []

    return <div className="md:mx-20 mx-6 mt-10 h-screen" data-id={id}>
        <div className="w-full border-b border-gray-400 py-4 mb-5">
            <h1 className="text-3xl uppercase font-bold">{product.name}</h1>
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="w-full md:w-1/2 flex flex-col gap-1">
                <MapAuction auctionId={id} className="w-full p-2"/>
                <div className="w-full h-52 flex flex-row gap-2 p-2">
                    <div className="w-40 h-full">
                        <UserIcon className="text-slate-800 border border-slate-800 rounded-full p-0"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <CarrierDetails carrier={product?.assignAt} comments={comments}/>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-2 justify-between items-center border-t border-gray-400 pt-4 overflow-x-scroll" style={{ scrollbarWidth:'thin' }}>
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
            <div className="w-full md:w-1/2">
                <div className="w-full p-2">
                    <h2 className="text-2xl font-semibold">Detalles de la Encomienda</h2>
                    <div className="pl-2 border-b border-slate-300 pb-3 ">
                    <span className="p-2">{ product.description }</span>
                    </div>
                    <div className="pl-2 border-b border-slate-300 py-3 grid grid-cols-2 divide-x">
                        <CardCoor location={product.from} />
                        <CardCoor location={product.to} />
                    </div>
                    <div className="pl-2 border-b border-slate-300 py-3 grid grid-cols-2 divide-x">
                        <CurrentStatus value={product.status} />
                        <Dimensions {...product} />
                    </div>
                    <div>
                        <ChatBox
                            productId={id}
                            user={user}
                            isOwner={product?.createdBy?.id===user.id}
                            isAssign={product?.assignAt?.user?.id===user.id}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}