import { MapPinIcon } from "@heroicons/react/24/outline"
import { STATES } from "@/tools/constants"

export default function ShippingAddress() {

    return <div>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="bg-white pb-4">
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-4">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-700">
                    Linea 1
                    </label>
                    <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="cc-given-name"
                    className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="col-span-4">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-700">
                    Linea 2
                    </label>
                    <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="cc-family-name"
                    className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-700">
                    País
                    </label>
                    <select
                    id="country"
                    name="country"
                    disabled
                    value="VE"
                    autoComplete="country-name"
                    className="mt-2 block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    >
                    <option value="VE">Venezuela</option>
                    </select>
                </div>

                <div className="col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-700">
                    Estado
                    </label>
                    <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-2 block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    >
                        { STATES.map( state => <option key={state.id} value={state.id}>{state.name}</option> ) }
                    </select>
                </div>

                <div className="col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-700">
                        Código Postal
                    </label>
                    <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                </div>

                {/* <div className="col-span-2 grid-center">
                    <label className="block text-sm font-medium leading-6 text-gray-700 opacity-0">Action</label>
                    <button
                        className="flex items-center justify-center mx-auto mt-2 w-1/2 rounded-md border-0 px-3 py-2 shadow-sm bg-black"
                    >
                        <MapPinIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </button>
                </div> */}
            </div>
        </div>
        </div>
    </div>
}