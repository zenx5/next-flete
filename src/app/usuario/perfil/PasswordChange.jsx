import TextField from "@/components/TextField"

export default function PasswordChange(){


    return <form className='h-screen w-full col-start-5 col-span-7'>
        <h1 className='text-center text-xl font-bold'>Actualizar Contraseña</h1>
        <div className='flex flex-col items-center gap-7'>
        <div className='flex flex-col gap-10 w-2/3 items-center mt-7'>
            <div className='flex flex-col w-full gap-4'>
            <TextField
                label="Contraseña Anterior"
                type="password"
                className={{
                    label:"font-bold bg-white px-2",
                    content: "border-black border rounded flex flex-row justify-between gap-2",
                    icon: "w-6 h-6"
                }}
                input={{
                    name:"old-password"
                }}
            />
            </div>
            <div className='flex flex-col w-full gap-4'>
            <TextField
                label="Nueva Contraseña"
                type="password"
                className={{
                    label:"font-bold bg-white px-2",
                    content: "border-black border rounded flex flex-row justify-between gap-2",
                    icon: "w-6 h-6"
                }}
                input={{
                    name:"new-password"
                }}
            />
            </div>
            <div className='w-full flex justify-end'>
            <button className="flex w-full  items-center justify-center rounded-md border border-transparent bg-orange-flete bg-opacity-80 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Actualizar
            </button>
            </div>
        </div>
        </div>
    </form>
}