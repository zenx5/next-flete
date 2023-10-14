"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import TextField from "./TextField";
import { MapPinIcon } from "./icons"
import { useState } from "react";

export default function ButtonLocation({ title, name, position, onChange }) {
    const [open, setOpen] = useState(false)
    const [namePlace, setNamePlace] = useState(name)
    const [pos, setPos] = useState( {
        lat: parseFloat( position.lat ),
        lng: parseFloat( position.lng )
    } )
    const libraries = [ "places" ]

    const handlerLocate = () => {
        onChange(namePlace, pos)
        setOpen( prev => false )
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
        libraries: libraries
    });

    const center = {
        lat: parseFloat( position.lat ),
        lng: parseFloat( position.lng )
    }

    const options = {
        disableDefaultUI: false,
        clickableIcons: true,
        scrollwheel: true
    }

    const handlerChangePosition = (event) => {
        setPos({
            lat : event.latLng.lat(),
            lng : event.latLng.lng()
        })

    }

    return <>
        <button className="group flex flex-col items-center rounded-md w-1/3" type="button" onClick={()=>setOpen(true)}>
            <p className="border border-gray-500 font-medium bg-gray-500 p-2 w-full text-center text-white rounded-t-md group-hover:bg-blue-500">{ title }</p>
            <span className="flex flex-row items-center justify-center gap-5 border border-gray-500 border-t-0 rounded-b-md w-full p-2">
                <MapPinIcon className="w-10 h-10 group-hover:text-blue-500" />
                <span className="flex flex-col">
                    <p>{ namePlace }</p>
                    <small className="text-[10px] m-0 p-0 opacity-50 italic">Lat { position.lat }</small>
                    <small className="text-[10px] m-0 p-0 opacity-50 italic">Lng { position.lng }</small>
                </span>
            </span>
        </button>
        { open && (!isLoaded ? <p>Loading...</p> : <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
            <div className="absolute bg-gray-600 opacity-30 top-0 left-0 w-full h-full z-10"></div>
            <div className="bg-white z-20 w-2/3 p-4 rounded-md">
                <h3 className="font-semibold">Seleccion Ubicación</h3>
                <span className="flex flex-row gap-2 items-center">
                    <span className="w-8/12">
                        <TextField label="Name"
                            input={{
                                value: namePlace,
                                onChange: (event) => setNamePlace( event.target.value )
                            }}
                        />
                    </span>
                    <span className="flex flex-row gap-1 w-4/12 pt-5">
                        <button type="button" onClick={()=>setOpen( false )} className="w-full bg-red-500 hover:bg-red-700 text-white rounded p-2">Cancelar</button>
                        <button type="button" onClick={handlerLocate} className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded p-2">Actualizar</button>
                    </span>
                </span>
                <div className="mt-2 rounded-lg overflow-hidden">
                    <GoogleMap
                        options={options}
                        zoom={9}
                        center={pos}
                        mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: 'auto', height: '800px' }}
                        onLoad={() => console.log('Map Component Loaded...')}
                        onClick={handlerChangePosition}
                    >
                        <Marker position={pos} />
                    </GoogleMap>
                </div>
            </div>
        </div>)}
    </>
}