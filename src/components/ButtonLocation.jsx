"use client";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import TextField from "./TextField";
import { MapPinIcon } from "./icons"
import { useState } from "react";

export default function ButtonLocation({ title }) {
    const [open, setOpen] = useState(false)
    const libraries = [ "places" ]

    const handlerLocate = () => {
        setOpen( prev => !prev )
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
        libraries: libraries
    });

    const center = {
        lat: 27.672932021393862,
        lng: 85.31184012689732
    }

    const options = {
        disableDefaultUI: true,
        clickableIcons: true,
        scrollwheel: false
    }

    return <>
        <button className="flex flex-col items-center rounded-md w-1/3" type="button" onClick={handlerLocate}>
            <p className="border border-gray-500 font-medium bg-gray-500 p-2 w-full text-center text-white rounded-t-md">{ title }</p>
            <span className="flex flex-row items-center justify-center gap-5 border border-gray-500 border-t-0 rounded-b-md w-full p-2">
                <MapPinIcon className="w-10 h-10" />
                <span>
                    <p>Name</p>
                    <p>location</p>
                </span>
            </span>
        </button>
        { open && (!isLoaded ? <p>Loading...</p> : <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
            <div className="absolute bg-gray-600 opacity-30 top-0 left-0 w-full h-full z-10"></div>
            <div className="bg-white z-20 w-2/3 p-4 rounded-md">
                <h3 className="font-semibold">Seleccion Ubicación</h3>
                <span className="flex flex-row gap-2 items-center">
                    <span className="w-10/12">
                        <TextField label="Name"/>
                    </span>
                    <span className="w-2/12 pt-5">
                        <button type="button" onClick={handlerLocate} className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded p-2">Seleccionar</button>
                    </span>
                </span>
                <div className="mt-2 rounded-lg overflow-hidden">
                    <GoogleMap
                        options={options}
                        zoom={14}
                        center={center}
                        mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: 'auto', height: '800px' }}
                        onLoad={() => console.log('Map Component Loaded...')}
                    ></GoogleMap>
                </div>
            </div>
        </div>)}
    </>
}