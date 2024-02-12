"use client";
import { GoogleMap, Marker, useLoadScript, DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { onSnap } from "@/tools/firebase/actions";
import { ENTITIES } from "@/tools/constants";

export default function MapAuction({ auctionId, defaultZoom=7, width='auto', height='300px', className="w-1/2 h-1/2 mx-auto mt-5", children }) {
    const [auction, setAuction] = useState(null)
    const [center, setCenter] = useState(null)
    const [zoom, setZoom] = useState(7)
    const [response, setResponse] = useState(null)
    const [directionsValue, setDirectionsValue] = useState({
        origin: '',
        destination: '',
        travelMode: null,
    })
    const [driverPosition, setDriverPosition] = useState({ lat: 0, lng: 0 })

    useEffect( ()=>{
        if( navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition( (position) => {
                setDriverPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            })
        }
    }, [])

    useEffect(()=>{
        onSnap(ENTITIES.auctions, doc => {
            setAuction(doc)
            setCenter({
                lat: (parseFloat(doc.from.position.lat) + parseFloat(doc.to.position.lat))/2,
                lng: (parseFloat(doc.from.position.lng) + parseFloat(doc.to.position.lng))/2
            })
        }, auctionId)
    },[auctionId])


    // MAPS
    const libraries = [ "places" ]
    const options = {
        disableDefaultUI: false,
        clickableIcons: true,
        scrollwheel: true
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
        libraries: libraries
    });

    useEffect(()=>{
        if( isLoaded && auction ) {
            setDirectionsValue({
                origin: auction.from.position,
                destination: auction.to.position,
                travelMode: google.maps.TravelMode.DRIVING
            })
        }
    },[isLoaded, auction])

    return <div className={className}>
        { (isLoaded && auction) && <GoogleMap
            options={options}
            zoom={defaultZoom}
            center={center}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width, height }}
            onLoad={() => console.log('Map Component Loaded...')}
        >
            { children }
            <Marker position={{
                lat: parseFloat( auction.to.position.lat ),
                lng: parseFloat( auction.to.position.lng ),
            }} />
            <Marker position={{
                lat: parseFloat( auction.from.position.lat ),
                lng: parseFloat( auction.from.position.lng ),
            }} />
            <Marker 
                position={driverPosition}
            />
            {   (directionsValue.destination !== '' && directionsValue.origin !== '') && <DirectionsService
                    options={directionsValue}
                    callback={(result, status) => {
                        if (result !== null && !response) {
                            if (status === 'OK') {
                                setResponse(result)
                            }
                        }
                    }}
              />
            }
            { response && <DirectionsRenderer options={{
                directions: {
                    ...response,
                    request:{
                        ...response.request
                    }
                }
            }} /> }

        </GoogleMap>}
    </div>
}