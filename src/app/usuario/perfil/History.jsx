"use client";
import { useEffect, useState } from "react"
import { onSnap } from "@/tools/firebase/actions"
import HistoryList from "./HistoryList";




export default function History({ user }) {
  const [tab, setTab] = useState(0)
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

  const winAuction = (entity) => {
    const auction = entity.auctions?.at( entity.auctions.length - 1 )
    return auction && auction?.user?.email===user?.email// || entity?.createdBy?.email===user?.email
  }

  const selfAuction = (entity) => {
    return entity?.createdBy?.email===user?.email
  }

  return <div>
    <ul className="flex flex-row">
      <li onClick={()=>setTab(0)} className={"cursor-pointer border border-gray-300 py-2 px-4 rounded-tl-md" + (tab===0 ? " font-bold":" bg-gray-100 text-gray-400")}>Subastas Ganadas</li>
      <li onClick={()=>setTab(1)} className={"cursor-pointer border border-gray-300 py-2 px-4 rounded-tr-md" + (tab===1 ? " font-bold":" bg-gray-100 text-gray-400")}>Subastas Creadas</li>
    </ul>
    { tab===0 && <HistoryList entities={entities.filter(winAuction)} currentPosition={currentPosition}/> }
    { tab===1 && <HistoryList entities={entities.filter(selfAuction)} currentPosition={currentPosition}/> }
  </div>
}