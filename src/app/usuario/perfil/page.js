import LineInput from "@/components/LineInput";


export default function ProfilePage(){

    return <div className="flex flex-row p-10 gap-5 bg-gray-200">
        <div className="border border-blue-300 p-4 rounded-lg flex flex-col items-center shadow w-2/12 h-fit bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-center text-blue-500 border-4 border-blue-500 rounded-full p-4 self-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p className="text-center text-blue-300 italic mt-2">¡¡Bienvenido a Cadete Siempre!!</p>
            <p className="text-center text-black-300 italic mt-4 border-t-2">omartinez1618@gmail.com</p>
        </div>
        <div className="border border-blue-300 p-4 rounded-lg flex flex-col items-center shadow w-10/12 bg-white gap-2">
            <h3 className="font-bold">Datos Personales</h3>
            <div className="flex flex-row w-full gap-4 mb-5">
                <div className="flex flex-col justify-start w-1/2 gap-2">
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                </div>
            </div>
            <h3 className="font-bold">Datos de Acceso</h3>
            <div className="flex flex-row w-full gap-4 mb-5">
                <div className="flex flex-col justify-start w-1/2 gap-2">
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                </div>
            </div>
            <h3 className="font-bold">Dirección</h3>
            <div className="flex flex-row w-full gap-4 mb-5">
                <div className="flex flex-col justify-start w-1/2 gap-2">
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                    <LineInput label="Nombre" />
                </div>
            </div>
        </div>
    </div>
}