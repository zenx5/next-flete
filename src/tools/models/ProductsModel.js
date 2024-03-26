import { STATUS } from "../constants";
import { BaseModel } from "./BaseModel";

export default class ProductsModel extends BaseModel {
    static  tableName = 'products'

    static async put() {
        
    }

    static async chagneStatus(id, status) {
        if( status===STATUS.ACCEPT ) {
            const data = await this.get(id)
            if( data.status!==STATUS.ACTIVE ) return false
            const index = data?.assignAt ? data?.assignAt?.index+1 : 0
            if( data?.auctions?.length > 0 ) {
                const auctionsOrdered = data.auctions.sort(()=>-1)
                return await this.put( id, {
                    ...data,
                    status,
                    assignAt: {
                        ...auctionsOrdered[index],
                        index
                    }
                } )
            }
            return false
        }
        else if( status===STATUS.CLOSED ) {
            const data = await this.get(id)
            if( data.status===STATUS.ACCEPT ) return false
            return await this.put( id, {
                ...data,
                status
            } )
        }
        else if( status===STATUS.ACTIVE ) {
            const data = await this.get(id)
            if( data.status===STATUS.ACCEPT ) return false
            return await this.put( id, {
                ...data,
                status:status
            } )
        }
    }
}
