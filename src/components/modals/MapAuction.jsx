"use client";
import { GoogleMap, Marker, useLoadScript, DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { onSnap } from "../../tools/firebase/actions";
import { ENTITIES } from "../../tools/constants";

export default function MapAuction({ auctionId }) {
    const [auction, setAuction] = useState(null)
    const [center, setCenter] = useState(null)
    const [zoom, setZoom] = useState(7)
    const [response, setResponse] = useState(null)
    const [directionsValue, setDirectionsValue] = useState({
        origin: '',
        destination: '',
        travelMode: null,
      })

    useEffect(()=>{
        onSnap(ENTITIES.auctions, doc => {
            console.log( doc )
            setAuction(doc)
            setCenter({
                lat: (parseInt(doc.from.position.lat) + parseInt(doc.to.position.lat))/2,
                lng: (parseInt(doc.from.position.lng) + parseInt(doc.to.position.lng))/2
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

    return <div className="w-1/2 h-1/2 mx-auto mt-20">
        { (isLoaded && auction) && <GoogleMap
            options={options}
            zoom={7}
            center={center}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: 'auto', height: '800px' }}
            onLoad={() => console.log('Map Component Loaded...')}
        >
            <Marker position={{
                lat: parseInt( auction.to.position.lat ),
                lng: parseInt( auction.to.position.lng ),
            }} />
            <Marker position={{
                lat: parseInt( auction.from.position.lat ),
                lng: parseInt( auction.from.position.lng ),
            }} />
            {   (directionsValue.destination !== '' && directionsValue.origin !== '') && <DirectionsService
                    options={directionsValue}
                    callback={(result, status) => {
                        if (result !== null) {
                            if (status === 'OK') {
                                console.log( result )
                                setResponse(result)
                            } else {
                                console.log('response: ', result)
                            }
                        }
                    }}
              />
            }
            { response && <DirectionsRenderer options={{
                directions: response
            }} /> }

        </GoogleMap>}
    </div>
}