import TextField from '@/components/TextField'
import ButtonLocation from '@/components/ButtonLocation'
import { actionGet, actionSave } from './firebase/actions'
import { ENTITIES } from './constants'
import AuctionForm from '../components/modals/AuctionForm'


const modals = [
    {
        name: 'basic',
        component: () => <p className="bg-white text-red-600 p-5">modal basic here</p>,
        routes: [],
        recovery: data => null
    },
    {
        name:'edit-auction',
        component: (auctionId) => <AuctionForm auctionId={auctionId}/>,
        routes: [],
        recovery: async data => data.id
    }
]

export default modals