"use client";
import RowUpdatable from "@/components/RowUpdatable"

export default function Account({ user }) {

    return <div className=" divide-y divide-gray-200 col-span-9">
            <div className="space-y-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Perfil</h3>
            <p className="max-w-2xl text-sm text-gray-500">
                Esta información se mostrará públicamente, así que tenga cuidado con lo que comparte.
            </p>
            </div>
            <div className="mt-6">
        <dl className="divide-y divide-gray-200">
            <RowUpdatable label="Nombre" value={user.name} onUpdate={()=>{}}/>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
            <dt className="text-sm font-medium text-gray-500">Foto</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                </span>
                <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                <button
                    type="button"
                    className="rounded-md bg-white font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Actualizar
                </button>
                </span>
            </dd>
            </div>
            <RowUpdatable label="Email" value={user.email}/>
            <RowUpdatable label="Telefono" value={user.phone} onUpdate={()=>{}}/>
            <RowUpdatable label="Telefono Familiar" value={user.phoneFamily} onUpdate={()=>{}}/>
            <RowUpdatable label="Cumpleaños" value={user.birthdate}/>
            <RowUpdatable label="Academia" value={user.academic}/>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Grado</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{ user.grade }</span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="flex-grow text-gray-500">Siguiente</span>
                <span className="flex-grow">{ user.nextGrade }</span>
            </dd>
            </div>
        </dl>
        </div>
        </div>
}