export default function PasswordChange({ onClick }){

    return <div className='h-screen w-full col-start-5 col-span-7'>
        <h1 className='text-center text-xl font-bold'>Actualizar Contraseña</h1>
        <div className='flex flex-col items-center gap-7'>
        <div className='flex flex-col gap-10 w-2/3 items-center mt-7'>
            <div className='flex flex-col w-full gap-4'>
            <label className='font-bold'>
                Contraseña Anterior
            </label>
            <input className='border rounded-md px-4 py-2' type='password' placeholder='********' />
            </div>
            <div className='flex flex-col w-full gap-4'>
            <label className='font-bold'>
                Contraseña Nueva
            </label>
            <input className='border rounded-md px-4 py-2' type='password' placeholder='********' />
            </div>
            <div className='w-full flex justify-end'>
            <button onClick={onClick} className="flex w-full  items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Actualizar
            </button>
            </div>
        </div>
        </div>
    </div>
}