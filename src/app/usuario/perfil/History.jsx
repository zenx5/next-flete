"use client";
import { useEffect, useState } from "react"
import { onSnap } from "@/tools/firebase/actions"
import { formatAuction } from "@/tools/formatFields";
import MapAuction from "@/components/modals/MapAuction";
import { Marker } from "@react-google-maps/api";

export default function History({ user }) {
  const [entities, setEntities] = useState([])
  const [currentPosition, setCurrentPosition] = useState({lat:null, lng:null})

  useEffect(()=>{
    onSnap( process.env.NEXT_PUBLIC_ENTITY_PRODUCT_NAME , data => {
        setEntities( prev => {
            const aux = []
            for( const item of data ) {
                aux.push(item)
            }
            return aux
        } )
    }, null)
  },[])

  useEffect(()=>{
    navigator?.geolocation?.getCurrentPosition( position => {
        setCurrentPosition({
            lat : position.coords.latitude,
            lng : position.coords.longitude
        })
    })
  }, [])

  const selfAuction = (entity) => {
    const auction = entity.auctions?.at( entity.auctions.length - 1 )
    return auction && auction?.user?.email===user?.email
  }


  return <div className='h-screen w-full col-start-5 col-span-7'>
    { entities.filter(selfAuction).map( entity => <div key={entity.id} className="border border-slate-200 my-5 py-5 px-10 rounded-lg shadow-md">
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
          <span className="text-gray-600 italic">12/10/2023</span>
        </span>
        <span className="flex flex-row gap-5">
          <span className="font-medium">Fecha de Entrega</span>
          <span className="text-gray-600 italic">12/10/2023</span>
        </span>

      </span>

    </div>)}
  </div>
}