import { STATUS } from "../constants";
import { actionSave } from "../firebase/actions";
import { BaseModel } from "./BaseModel";

export default class ProductsModel extends BaseModel {
    static  tableName = 'products'

    static async put(id, data ) {
        const { status, ...rest } = data
        return await actionSave(this.tableName, rest, id)
    }

    static canChangeStatus( statusFrom, statusTo ) {
        const listFromTo = {
            [STATUS.ACCEPT]: [ STATUS.IN_ROAD, STATUS.UNPICKED_UP, STATUS.BLOCK ],
            [STATUS.ACTIVE]: [ STATUS.CLOSED, STATUS.ACCEPT, STATUS.HIDDEN, STATUS.BLOCK ],
            [STATUS.CLOSED]: [ STATUS.ACTIVE, STATUS.HIDDEN, STATUS.BLOCK ],
            [STATUS.HIDDEN]: [ STATUS.ACTIVE, STATUS.CLOSED, STATUS.BLOCK ],
            [STATUS.IN_ROAD]: [ STATUS.DELIVERED, STATUS.DELAYED, STATUS.BLOCK ],
            [STATUS.DELIVERED]: [ STATUS.BLOCK ],
            [STATUS.DELAYED]: [ STATUS.IN_ROAD, STATUS.DELIVERED, STATUS.BLOCK ],
            [STATUS.UNPICKED_UP]: [ STATUS.ACTIVE, STATUS.ACCEPT, STATUS.CLOSED, STATUS.HIDDEN, STATUS.IN_ROAD, STATUS.BLOCK ],
            [STATUS.BLOCK]: [ STATUS.ACTIVE, STATUS.ACCEPT, STATUS.CLOSED, STATUS.HIDDEN, STATUS.DELIVERED, STATUS.DELAYED, STATUS.UNPICKED_UP, STATUS.IN_ROAD, STATUS.BLOCK ]
        }
        return listFromTo[statusFrom].includes( statusTo )
    }

    static async changeStatus(id, status) {
        const data = await this.get(id);
        console.log(data)
        if( !this.canChangeStatus( data.status, status ) ) return false;
        if( status === STATUS.ACCEPT ) {
            if( data?.auctions?.length <= 0 ) return false
            const index = data?.assignAt ? data?.assignAt?.index + 1 : 0;
            const auctionsOrdered = data.auctions.sort(() => -1);
            const newAssignAt = { ...auctionsOrdered[index], index };
            return await actionSave( this.tableName, { ...data, status, assignAt: newAssignAt }, id );
        } else if( status === STATUS.CLOSED) {
            return await actionSave( this.tableName, { ...data, status }, id ) ;
        } else if( status === STATUS.ACTIVE ) {
            return await actionSave( this.tableName, { ...data, status }, id );
        } else if( status === STATUS.HIDDEN ) {
            return await actionSave( this.tableName, { ...data, status }, id );
        } else if( status === STATUS.IN_ROAD ) {
            return await actionSave( this.tableName, { ...data, status }, id );
        } else if( status === STATUS.DELIVERED ) {
            return await actionSave( this.tableName, { ...data, status }, id );
        } else if( status === STATUS.DELAYED ) {
            return await actionSave( this.tableName, { ...data, status }, id );
        } else if( status === STATUS.UNPICKED_UP ) {
            return await actionSave( this.tableName, { ...data, status }, id );
        }
        return false
    }
}
