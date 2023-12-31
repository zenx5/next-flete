import { useEffect, useState } from "react"
import Link from "next/link"
import TextField from "../TextField"
import ButtonLocation from "../ButtonLocation"
import { actionSave, onSnap } from "@/tools/firebase/actions"
import { ENTITIES } from "@/tools/constants"

export default function AuctionForm({ auctionId, userId }) {
    const [auction, setAuction] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        if( auctionId==="0" ){
            setAuction({
                id:null,
                name:"",
                description:"",
                status: 'active',
                price:0,
                from: {
                    name:"",
                    position: {
                        lat: 0,
                        lng: 0
                    }
                },
                to: {
                    name:"",
                    position: {
                        lat: 0,
                        lng: 0
                    }
                },
                dimensions: {
                    width: 0,
                    height: 0,
                    large: 0,
                    unit: ''
                },
                weight: "",
                endTime: 0,
                deliveryTime: 0,
                pickUpTime: 0
            })
        } else {
            onSnap(ENTITIES.auctions,doc => {
                setAuction(prev => doc)
            }, auctionId)
        }
    }, [auctionId])

    useEffect(()=>{
        if( userId ) {
            onSnap(ENTITIES.users, doc => setUser(prev => doc ), userId)
        }

    }, [userId])

    const handlerChangeAuction = (tag, value) => {
        if( auctionId=="0") {
            setAuction(prev=>({
                ...auction,
                [tag]: value
            }))
        } else {
            actionSave(
                ENTITIES.auctions,
                {
                    ...auction,
                    [tag]: value
                },
                auctionId
            )

        }
    }

    const handlerCreate = async () => {
        if( !await actionSave( ENTITIES.auctions, {
            ...auction,
            createdBy: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        } ) ) {
            console.log('algo va mal')
        }
    }

    console.log( auction )


    return auction && <div className="w-full h-full flex items-center justify-center">
        <div className="p-4 bg-white text-black w-1/2 rounded-lg">
            <div className="flex flex-row justify-between">
                <h2 className="font-semibold">Edit auction {auction.id}</h2>
                { auctionId=="0" && <Link href="?" onClick={handlerCreate} className="bg-green-500 hover:bg-green-700 text-white rounded p-2 w-2/12 text-center">Crear</Link>}
            </div>
            <form >
                <span className="flex flex-row gap-1 justify-between">
                    <TextField
                        label="Name"
                        type="text"
                        input={{
                            value:auction.name ?? "",
                            onChange: event => handlerChangeAuction('name', event.target.value)
                        }}/>
                    <TextField
                        label="Price"
                        type="number"
                        input={{
                            value:auction.price ?? "",
                            onChange: event => handlerChangeAuction('price', event.target.value)
                        }}/>
                </span>
                <TextField
                    label="Description"
                    type="text"
                    input={{
                        value:auction.description ?? "",
                        onChange: event => handlerChangeAuction('description', event.target.value)
                    }}/>
                <p className="mt-5 font-semibold mb-2">Ubicación</p>
                <span className="flex flex-row gap-5 justify-around">
                    <ButtonLocation
                        title="From"
                        name={auction.from.name}
                        position={auction.from.position}
                        geolocate={auctionId==="0"}
                        onChange={ (name, position) => handlerChangeAuction('from', { name, position })}
                    />
                    <ButtonLocation
                        title="To"
                        name={auction.to.name}
                        position={auction.to.position}
                        geolocate={auctionId==="0"}
                        onChange={ (name, position) => handlerChangeAuction('to', { name, position })}
                    />
                </span>
                <p className="mt-5 font-semibold">Medidas</p>
                <span className="flex flex-col gap-2 px-5">
                    <span className="flex flex-row gap-2 justify-around">
                        <TextField
                            label="Width"
                            type="number"
                            input={{
                                value:auction.dimensions.width ?? "",
                                onChange: event => handlerChangeAuction('dimensions', { ...auction.dimensions, width:event.target.value })
                            }} />
                        <TextField
                            label="Height"
                            type="number"
                            input={{
                                value:auction.dimensions.height ?? "",
                                onChange: event => handlerChangeAuction('dimensions', { ...auction.dimensions, height:event.target.value })
                            }} />
                    </span>
                    <span className="flex flex-row gap-2 justify-around">
                        <TextField
                            label="Large"
                            type="number"
                            input={{
                                value:auction.dimensions.large ?? "",
                                onChange: event => handlerChangeAuction('dimensions', { ...auction.dimensions, large:event.target.value })
                            }} />
                        <TextField
                            label="Units"
                            type="text"
                            input={{
                                value:auction.dimensions.unit   ?? "",
                                onChange: event => handlerChangeAuction('dimensions', { ...auction.dimensions, unit:event.target.value })
                            }} />
                    </span>
                </span>
                <p className="mt-5 font-semibold">Tiempos</p>
                <span className="flex flex-col gap-2 px-5 pb-10">
                    <span className="flex flex-row gap-2 justify-around">
                        <TextField
                            label="De cierre"
                            type="date"
                            helperText="Fecha para el cierre de la subasta"
                            input={{
                                value: auction.endTime ,
                                onChange: event => handlerChangeAuction('endTime', event.target.value )
                            }} />
                        <TextField
                            label="De recogida"
                            type="date"
                            helperText="Fecha limite para pasar buscando la encomienda"
                            input={{
                                value: auction.pickUpTime,
                                onChange: event => handlerChangeAuction('pickUpTime', event.target.value )
                            }} />
                        <TextField
                            label="De Entrega"
                            type="date"
                            helperText="Fecha limite para entregar en destino"
                            input={{
                                value: auction.deliveryTime,
                                onChange: event => handlerChangeAuction('deliveryTime', event.target.value )
                            }} />
                    </span>

                </span>
            </form>
        </div>
    </div>
}