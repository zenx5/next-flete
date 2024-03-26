import { STATUS } from "../constants";
import { actionSave } from "../firebase/actions";
import { BaseModel } from "./BaseModel";

export default class ProductsModel extends BaseModel {
    static  tableName = 'products'

    static async put(id, data ) {
        const { status, ...rest } = data
        return await actionSave(this.tableName, rest, id)
    }

    static async chagneStatus(id, status) {
        const data = await this.get(id);
        if (status === STATUS.ACCEPT) {
            if( data.status !== STATUS.ACTIVE ) return false;
            const index = data?.assignAt ? data?.assignAt?.index + 1 : 0;
            if( data?.auctions?.length > 0 ) {
                const auctionsOrdered = data.auctions.sort(() => -1);
                const newAssignAt = { ...auctionsOrdered[index], index };
                return await actionSave( this.tableName, { ...data, status, assignAt: newAssignAt }, id );
            }
            return false;
        } else if( status === STATUS.CLOSED) {
            if( data.status === STATUS.ACCEPT ) return false;
            return await actionSave( this.tableName, { ...data, status }, id ) ;
        } else if( status === STATUS.ACTIVE ) {
            if( data.status === STATUS.ACCEPT ) return false;
            return await actionSave( this.tableName, { ...data, status: status }, id );
        }
    }
}
