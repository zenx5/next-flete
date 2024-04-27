import { useEffect, useState } from "react"
import Link from "next/link"
import TextField from "../TextField"
import ButtonLocation from "../ButtonLocation"
import { actionSave, onSnap } from "@/tools/firebase/actions"
import { ENTITIES } from "@/tools/constants"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
        toast.success("Flete creado")
    }

    console.log( auction )


    return auction && <div className="w-full h-full flex justify-center md:items-center items-start">
        <div className="md:p-4 p-1 pt-4  bg-white text-black md:w-1/2 md:min-w-[600px] w-full mx-1 rounded-lg">
            <div className="flex flex-row md:justify-between justify-start items-center">
                <h2 className="font-semibold md:mr-0 mr-10">Edit auction {auction.id}</h2>
                { auctionId=="0" && <Link href="?" onClick={handlerCreate} className="md:relative fixed md:bottom-0 md:right-0 bottom-5 right-10 rounded-full bg-green-500 hover:bg-green-700 text-white md:rounded p-2 md:w-2/12 w-fit text-center">
                    <span className="hidden md:inline">Crear</span>
                    <span className="md:hidden inline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </span>
                </Link>}
            </div>
            <form >
                <span className="flex md:flex-row flex-col gap-1 justify-between">
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
                <p className="md:mt-5 mt-2 md:ml-0 ml-4 font-semibold mb-2">Ubicación</p>
                <span className="flex md:flex-row flex-col gap-5 items-center justify-around">
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
                <p className="md:mt-5 mt-2 md:ml-0 ml-4 font-semibold">Medidas</p>
                <span className="flex flex-col gap-2 px-5">
                    <span className="flex md:flex-row flex-col md:gap-2 gap-0 justify-around">
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
                    <span className="flex md:flex-row flex-col md:gap-2 gap-0 justify-around">
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
                <p className="md:mt-5 mt-2 md:ml-0 ml-4 font-semibold">Tiempos</p>
                <span className="flex flex-col gap-2 px-5 pb-10">
                    <span className="flex md:flex-row flex-col md:gap-2 gap-0 justify-around">
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
        <ToastContainer />
    </div>
}