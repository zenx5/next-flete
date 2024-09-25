import { STATUS } from "../constants";
import { actionSave } from "../firebase/actions";
import { BaseModel } from "./BaseModel";

export default class ProductsModel extends BaseModel {
    static  tableName = 'products'

    static async put(id, data ) {
        const { status, ...rest } = data
        return await actionSave(this.tableName, rest, id)
    }

    static async openTicket(id, userId) {
        const data = await this.get(id);
        const ticket = {
            open: true,
            userId,
            createdAt: Date.now(),
            messages: []
        }
        return await actionSave( this.tableName, { ...data, tickets: [ ...data.tickets, ticket ] }, id )
    }

    static async closeTicket(id, userId, ticketId) {
        const data = await this.get(id);
        const ticket = data.tickets.find( ticket => ticket.id === ticketId )
        if( !ticket ) return false
        if( ticket.userId !== userId ) return false
        return await actionSave( this.tableName, { ...data, tickets: data.tickets.map( t => t.id === ticketId ? { ...t, open: false } : t ) }, id )
    }

    static async putMessage(id, userId, ticketId, message) {
        const data = await this.get(id);
        const ticket = data.tickets.find( ticket => ticket.id === ticketId )
        if( !ticket ) return false
        return await actionSave( this.tableName, { ...data, tickets: data.tickets.map( t => t.id === ticketId ? { ...t, messages: [ ...t.messages, message ] } : t ) }, id )
    }

    static canChangeStatus( statusFrom, statusTo ) {
        const listFromTo = {
            [STATUS.ACCEPT]: [ STATUS.ACTIVE ],
            [STATUS.ACTIVE]: [ STATUS.CLOSED, STATUS.ACCEPT ],
            [STATUS.CLOSED]: [ STATUS.ACTIVE ]
        }
        return listFromTo[statusFrom].includes( statusTo )
    }

    static async changeStatus(id, status) {
        const data = await this.get(id);
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
            return await actionSave( this.tableName, { ...data, status: status }, id );
        }
        return false
    }
}
