"use client";
import { useState } from 'react';

export default function RowUpdatable({ label, value, onUpdate }) {
    const [edit, setEdit] = useState(false)
    const [state, setState] = useState(value)

    const updateRow = () =>  {
        if( edit ) {
            setEdit(false)
            onUpdate && onUpdate(state)
        } else {
            setEdit(true)
        }
    }



    return <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
        <dt className="text-sm font-medium text-gray-500">{ label }</dt>
        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {edit ? <input className="flex-grow border-b border-gray-900 outline-none" value={state} onChange={({ target })=>setState(target.value)} /> : <span className="flex-grow">{ state }</span> }
            {onUpdate && <span className="ml-4 flex-shrink-0">
                <button
                type="button"
                onClick={ () => updateRow() }
                className="rounded-md bg-white font-medium text-orange-600 hover:text-orange-500 focus:outline-none "
                >
                { edit ? 'Guardar' : 'Actualizar'}
                </button>
            </span>}
        </dd>
    </div>
}