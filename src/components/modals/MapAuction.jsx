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
        console.log('use effect 1')
        onSnap(ENTITIES.auctions, doc => {
            console.log( doc )
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
        console.log('use effect 2')
        if( isLoaded && auction ) {
            setDirectionsValue({
                origin: auction.from.position,
                destination: auction.to.position,
                travelMode: google.maps.TravelMode.DRIVING
            })
        }
    },[isLoaded, auction])

    return <div className="w-1/2 h-1/2 mx-auto mt-5">
        { (isLoaded && auction) && <GoogleMap
            options={options}
            zoom={7}
            center={center}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: 'auto', height: '300px' }}
            onLoad={() => console.log('Map Component Loaded...')}
        >
            <Marker position={{
                lat: parseFloat( auction.to.position.lat ),
                lng: parseFloat( auction.to.position.lng ),
            }} />
            <Marker position={{
                lat: parseFloat( auction.from.position.lat ),
                lng: parseFloat( auction.from.position.lng ),
            }} />
            {   (directionsValue.destination !== '' && directionsValue.origin !== '') && <DirectionsService
                    options={directionsValue}
                    onLoad={(d)=>console.log('load',d)}
                    callback={(result, status) => {
                        if (result !== null && !response) {
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