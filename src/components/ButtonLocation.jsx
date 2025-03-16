"use client";
import { GoogleMap, Marker, useLoadScript, Autocomplete, LoadScript } from "@react-google-maps/api";
import TextField from "./TextField";
import { MapPinIcon } from "./icons"
import { useEffect, useState, useRef } from "react";
import AutocompleteLocation from "./AutocompleLocation";

export default function ButtonLocation({ title, name, position, geolocate, onChange }) {
    const [open, setOpen] = useState(false)
    const [namePlace, setNamePlace] = useState(name)
    const [pos, setPos] = useState( {
        lat: parseFloat( position.lat ),
        lng: parseFloat( position.lng )
    } )
    const [center, setCenter] = useState( {
        lat: parseFloat( position.lat ),
        lng: parseFloat( position.lng )
    } )
    const libraries = [ "places", "geometry", "drawing", "visualization" ]

    const handlerLocate = () => {
        onChange(namePlace, pos)
        setOpen( prev => false )
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
        libraries: libraries
    });

    const options = {
        disableDefaultUI: false,
        clickableIcons: true,
        scrollwheel: true
    }

    const handlerChangePosition = async (event) => {
        setPos({
            lat : event.latLng.lat(),
            lng : event.latLng.lng()
        })

        try{
            const service = new google.maps.places.PlacesService(document.querySelector("[role='region']"));
            service.nearbySearch({
                location: event.latLng,
                radius: 1000,

            }, (data, status) => {
                if( status === google.maps.places.PlacesServiceStatus.OK ) {
                    setNamePlace(data[0].name)
                }
            });
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(()=>{
        if( geolocate ) {
            navigator?.geolocation?.getCurrentPosition( position => {
                setPos({
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                })
                setCenter({
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                })
            })

        }
    }, [geolocate])

    return <>
        <button className="group flex flex-col items-center rounded-md w-2/3" type="button" onClick={()=>setOpen(true)}>
            <p className="border border-gray-500 font-medium bg-gray-500 p-2 w-full text-center text-white rounded-t-md group-hover:bg-blue-500">{ title }</p>
            <span className="flex flex-row items-center justify-center gap-5 border border-gray-500 border-t-0 rounded-b-md w-full p-2">
                <MapPinIcon className="w-10 h-10 group-hover:text-blue-500" />
                <span className="flex flex-col">
                    <p>{ namePlace }</p>
                </span>
            </span>
        </button>
        { open && (!isLoaded ? <p>Loading...</p> : <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
            <div className="absolute bg-gray-600 opacity-30 top-0 left-0 w-full h-full z-10"></div>
            <div className="bg-white z-20 w-2/3 p-4 rounded-md">
                <h3 className="font-semibold">Seleccion Ubicación</h3>
                <span className="flex flex-row gap-2 items-center">
                    <span className="w-8/12">
                        <AutocompleteLocation
                            className="border border-black w-full h-full py-2"
                            value={namePlace}
                            fields={["address_components", "geometry"]}
                            onChangeName={setNamePlace}
                            onPlaceChanged={ place => {
                                const types = ['locality','administrative_area_level_1', 'country']
                                setNamePlace(
                                    place.address_components
                                    .filter( item => item.types.map( type => types.includes(type) ).filter( is => is ).length>0 )
                                    .map( item => item.long_name ).join(", ")
                                )
                                const geometry = place.geometry
                                setPos({
                                    lat: geometry.location.lat(),
                                    lng: geometry.location.lng()
                                })
                                setCenter({
                                    lat: geometry.location.lat(),
                                    lng: geometry.location.lng()
                                })

                            }}
                        />
                    </span>
                    <span className="flex flex-row gap-1 w-4/12">
                        <button type="button" disabled={namePlace.trim().length===0} onClick={()=>setOpen( false )} className="w-full bg-red-500 disabled:bg-slate-300 disabled:text-red-400 hover:bg-red-700 text-white rounded p-2">Cancelar</button>
                        <button type="button" disabled={namePlace.trim().length===0} onClick={handlerLocate} className="w-full bg-blue-500 disabled:bg-slate-300 disabled:text-blue-400 hover:bg-blue-700 text-white rounded p-2">Actualizar</button>
                    </span>
                </span>
                <div className="mt-2 rounded-lg overflow-hidden">
                    <GoogleMap
                        options={options}
                        zoom={9}
                        center={center}
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