export default class Cart {

    static get(){
        return JSON.parse( sessionStorage.getItem('temp_cart') ) || {
            index: [],
            quantity: []
        }
    }

    static set(cart){
        sessionStorage.setItem('temp_cart', JSON.stringify(cart) )
    }

    static is( item ) {
        const cart = this.get()
        return cart.index.indexOf( item )
    }

    static quantity( item ) {
        const cart = this.get()
        const index = cart.index.indexOf( item )
        return index!=-1 ? cart.quantity[index] : 0
    }



    static add( item ) {
        const cart = this.get()
        const index = this.is(item)
        if ( index==-1 ) {
            cart.index.push(item)
            cart.quantity.push(1)
        } else {
            cart.quantity = cart.quantity.toSpliced(index,1, cart.quantity[index]+1)
        }
        this.set(cart)
    }

    static remove( item ) {
        const cart = this.get()
        const index = this.is(item)
        if ( index!=-1 ) {
            const quantity = cart.quantity[index]
            if( quantity === 1) {
                cart.index = cart.index.toSpliced(index,1)
                cart.quantity = cart.quantity.toSpliced(index,1)
            } else {
                cart.quantity = cart.quantity.toSpliced(index,1, cart.quantity[index]-1)
            }   
        }
        this.set(cart)
    }

    static clear() {
        sessionStorage.setItem('temp_cart', JSON.stringify({
            index: [],
            quantity: []
        }))
    }
}