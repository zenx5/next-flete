import { Autocomplete } from "@react-google-maps/api";
import { useEffect } from "react";
import { useState } from "react";

export default function AutocompleteLocation({ value, fields, className, onPlaceChanged, onChangeName }) {
    const [name, setName] = useState(value)
    const [autocomplete, setAutocomplete] = useState(null)

    useEffect(() => {
        setName(value)
    }, [value])

    const handleChangeName = ev => {
        setName(ev.target.value)
        onChangeName && onChangeName(ev.target.value)
    }

    const handlePlaceChanged = () => {
        if( !autocomplete ) return;
        const place = autocomplete.getPlace()
        if (!place?.geometry) {
            return;
        }
        onPlaceChanged && onPlaceChanged(place, name)
    }

    const handleLoad = (loadedAuto) => {
        loadedAuto.setOptions({ strictBounds: false })
        loadedAuto.setFields(fields ?? ["geometry", "name"])
        setAutocomplete( loadedAuto )
    }

    return <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged} >
        <input type="text" placeholder="Buscar Lugar" value={name} className={className ?? ""} onChange={handleChangeName} />
    </Autocomplete>
}