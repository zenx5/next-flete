import MapAuction from "@/components/modals/MapAuction";
import { Marker } from "@react-google-maps/api";
import { formatAuction } from "@/tools/formatFields";


export default function HistoryList({ entities, currentPosition }) {


    return <div className='h-screen w-full col-start-5 col-span-7'>
        { entities.length === 0 &&  <div className="w-full py-10 text-xl text-slate-500 italic text-center"> - SIN DATOS - </div> }
        { entities.map( entity => <div key={entity.id} className="border border-slate-200 my-5 py-5 px-10 rounded-lg shadow-md">
        <span className="flex flex-row justify-between border-b pb-4 mb-4">
            <h2 className="text-xl font-medium">{ entity.name } <small className="italic text-green-500 text-sm ml-5 border border-green-500 px-2 py-1 rounded-full">En camino</small></h2>

            <span>{ formatAuction(entity.auctions) }</span>
        </span>
        <span className="italic text-gray-600">{entity.description}</span>
        <div className="flex flex-col justify-center items-center w-full mt-10">
            <MapAuction auctionId={entity.id} width="700px" height="200px" className="w-auto mx-auto">
            <Marker
                position={{
                    lat: parseFloat( currentPosition.lat ),
                    lng: parseFloat( currentPosition.lng ),
                }} />
            </MapAuction>
        </div>
        <span className="flex flex-row justify-between mt-4">
            <span className="flex flex-row gap-5">
            <span className="font-medium">Fecha de Retiro</span>
            <span className="text-gray-600 italic">{ entity.pickUpTime ?? "0000-00-00"}</span>
            </span>
            <span className="flex flex-row gap-5">
            <span className="font-medium">Fecha de Entrega</span>
            <span className="text-gray-600 italic">{ entity.deliveryTime ?? "0000-00-00"}</span>
            </span>

        </span>

        </div>)}
    </div>
}