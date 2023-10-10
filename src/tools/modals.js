import TextField from '@/components/TextField'
import ButtonLocation from '@/components/ButtonLocation'
import { actionGet } from './firebase/actions'
import { ENTITIES } from './constants'

const modals = [
    {
        name: 'basic',
        component: () => <p className="bg-white text-red-600 p-5">modal basic here</p>,
        routes: [],
        recovery: data => null
    },
    {
        name:'edit-auction',
        component: (auction) => <div className="w-full h-full flex items-center justify-center">
            <div className="p-4 bg-white text-black w-1/2 rounded-lg">
                <h2 className="font-semibold">Edit auction {auction.id}</h2>
                <form >
                    <TextField label="Name" type="text" input={{ value:auction.name ?? "" }}/>
                    <p className="mt-5 font-semibold">Ubicación</p>
                    <span className="flex flex-row gap-5 justify-around">
                        <ButtonLocation title="From" name={auction.from.name} position={auction.from.position} />
                        <ButtonLocation title="To" name={auction.to.name} position={auction.to.position} />
                    </span>
                    <p className="mt-5 font-semibold">Medidas</p>
                    <span className="flex flex-col gap-2 px-5">
                        <span className="flex flex-row gap-2">
                            <TextField label="Width" type="number"  input={{ value:auction.dimensions.width ?? "" }} />
                            <TextField label="Height" type="number"  input={{ value:auction.dimensions.height ?? "" }} />
                        </span>
                        <span className="flex flex-row gap-2">
                            <TextField label="Large" type="number" input={{ value:auction.dimensions.large ?? "" }} />
                            <TextField label="Units" type="text" input={{ value:auction.dimensions.unit   ?? "" }} />
                        </span>
                    </span>
                </form>
            </div>
        </div>,
        routes: [],
        recovery: async data => await actionGet(ENTITIES.auctions, data.id)
    }
]

export default modals