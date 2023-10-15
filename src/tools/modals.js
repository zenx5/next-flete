import TextField from '@/components/TextField'
import ButtonLocation from '@/components/ButtonLocation'
import { actionGet, actionSave } from './firebase/actions'
import { ENTITIES } from './constants'
import AuctionForm from '../components/modals/AuctionForm'
import MapAuction from '../components/modals/MapAuction'


const modals = [
    {
        name: 'basic',
        component: () => <p className="bg-white text-red-600 p-5">modal basic here</p>,
        routes: [],
        recovery: data => null
    },
    {
        name:'edit-auction',
        component: ({auctionId, userId}) => <AuctionForm auctionId={auctionId} userId={userId}/>,
        routes: [],
        recovery: async data => ({
            auctionId:data.id,
            userId: data.userid
        })
    },
    {
        name:'map-auction',
        component: (auctionId) => <MapAuction auctionId={auctionId}  />,
        routes: [],
        recovery: async data => data.id
    },
]

export default modals