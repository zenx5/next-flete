import TextField from '@/components/TextField'
import ButtonLocation from '@/components/ButtonLocation'

const modals = [
    {
        name: 'basic',
        component: <p className="bg-white text-red-600 p-5">modal basic here</p>,
        routes: []
    },
    {
        name:'edit-auction',
        component: <div className="w-full h-full flex items-center justify-center">
            <div className="p-4 bg-white text-black w-1/2 rounded-lg">
                <h2 className="font-semibold">Edit auction</h2>
                <form >
                    <TextField label="Name" type="text"/>
                    <p className="mt-5 font-semibold">Ubicación</p>
                    <span className="flex flex-row gap-5 justify-around">
                        <ButtonLocation title="From" />
                        <ButtonLocation title="To" />
                    </span>
                    <p className="mt-5 font-semibold">Medidas</p>
                    <span className="flex flex-col gap-2 px-5">
                        <span className="flex flex-row gap-2">
                            <TextField label="Width" type="number" />
                            <TextField label="Height" type="number" />
                        </span>
                        <span className="flex flex-row gap-2">
                            <TextField label="Large" type="number" />
                            <TextField label="Units" type="text" />
                        </span>
                    </span>
                </form>
            </div>
        </div>,
        routes: []

    }
]

export default modals