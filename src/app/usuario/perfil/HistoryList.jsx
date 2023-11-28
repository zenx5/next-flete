import MapAuction from "@/components/modals/MapAuction";
import { Marker } from "@react-google-maps/api";
import { formatAuction } from "@/tools/formatFields";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/tools/hooks/useMediaQuery"


export default function HistoryList({ entities, currentPosition }) {
    const isLg = useMediaQuery('(min-width: 1024px)')
    const isMd = useMediaQuery('(min-width: 768px)')
    const isSm = useMediaQuery('(min-width: 640px)')


    const getWidth = () => {
        if( isLg && isMd && isSm ) return '700px'
        else if( !isLg && isMd && isSm ) return '700px'
        else if( !isLg && !isMd && isSm ) return '500px'
        else return '300px'
    }

    return <div className='h-screen w-full col-start-5 col-span-7'>
        { entities.length === 0 &&  <div className="w-full py-10 text-xl text-slate-500 italic text-center"> - SIN DATOS - </div> }
        { entities.map( entity => <div key={entity.id} className="border border-slate-200 my-5 py-5 px-10 rounded-lg shadow-md">
        <span className="flex sm:flex-row flex-col justify-between border-b pb-4 mb-4">
            <h2 className="flex flex-row justify-between text-xl font-medium">
                <span>{ entity.name }</span>
                <small className="sm:flex hidden italic h-fit text-green-500 text-sm ml-5 border border-green-500 px-2 py-1 rounded-full justify-center items-center">En camino</small>
                <span className="sm:hidden flex items-center justify-center w-5 h-5 border border-green-500 rounded-full">
                    <span className="border-green-500 border w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
            </h2>

            <span className="sm:bg-transparent sm:py-0 sm:mt-0 bg-gray-100 py-3 mt-2">{ formatAuction(entity.auctions) }</span>
        </span>
        <span className="italic text-gray-600">{entity.description}</span>
        <div className="flex flex-col justify-center items-center w-full mt-10 overflow-hidden" >
            <MapAuction auctionId={entity.id} width={getWidth()} height="200px" className="w-auto mx-auto">
                <Marker
                    position={{
                        lat: parseFloat( currentPosition.lat ),
                        lng: parseFloat( currentPosition.lng ),
                    }} />
            </MapAuction>
        </div>
        <span className="flex flex-col sm:flex-row text-xs justify-between mt-4">
            <span className="flex flex-row gap-5 justify-between">
                <span className="font-medium">Fecha de Retiro</span>
                <span className="text-gray-600 italic">{ entity.pickUpTime ?? "0000-00-00"}</span>
            </span>
            <span className="flex flex-row gap-5 justify-between">
                <span className="font-medium">Fecha de Entrega</span>
                <span className="text-gray-600 italic">{ entity.deliveryTime ?? "0000-00-00"}</span>
            </span>

        </span>

        </div>)}
    </div>
}