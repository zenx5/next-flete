import { useEffect, useState } from "react"
import TextField from "../TextField"
import ButtonLocation from "../ButtonLocation"
import { actionSave, onSnap } from "../../tools/firebase/actions"
import { ENTITIES } from "../../tools/constants"

export default function AuctionForm({ auctionId }) {
    const [auction, setAuction] = useState(null)
    useEffect(()=>{
        onSnap(ENTITIES.auctions,doc => {
            console.log( 'doc', doc )
            setAuction(prev => doc)
        }, auctionId)
    }, [auctionId])

    const handlerChangeAuction = (tag, value) => {
        console.log( tag, value )
        console.log( actionSave(
            ENTITIES.auctions,
            {
                ...auction,
                [tag]: value
            },
            auctionId
        ) )
    }


    return auction && <div className="w-full h-full flex items-center justify-center">
        <div className="p-4 bg-white text-black w-1/2 rounded-lg">
            <h2 className="font-semibold">Edit auction {auction.id}</h2>
            <form >
                <TextField
                    label="Name"
                    type="text"
                    input={{
                        value:auction.name ?? "",
                        onChange: event => handlerChangeAuction('name', event.target.value)
                    }}/>
                <p className="mt-5 font-semibold">Ubicación</p>
                <span className="flex flex-row gap-5 justify-around">
                    <ButtonLocation
                        title="From"
                        name={auction.from.name}
                        position={auction.from.position}
                        onChange={ (name, position) => handlerChangeAuction('to', { name, position })}
                    />
                    <ButtonLocation
                        title="To"
                        name={auction.to.name}
                        position={auction.to.position}
                        onChange={ (name, position) => handlerChangeAuction('to', { name, position })}
                    />
                </span>
                <p className="mt-5 font-semibold">Medidas</p>
                <span className="flex flex-col gap-2 px-5">
                    <span className="flex flex-row gap-2">
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
                    <span className="flex flex-row gap-2">
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
            </form>
        </div>
    </div>
}