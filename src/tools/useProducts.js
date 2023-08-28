import { useState, useEffect } from "react"
import Cart from "./cart.fake"
import { products as $products } from "@/tools/mockup/products.mockup"

export default function useProducts(){
    const [loaded, setLoaded] = useState( false )
    const [products, setProducts] = useState([])
    const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        if( products.length===0 && !loaded ) {
            (async ()=>{
                const { index } = Cart.get()
                const response = await loadProducts(index)
                setProducts( prev => response.map( item => ({
                    ...item,
                    quantity: Cart.quantity( item.id )
                })) )
                setQuantity( prev => response.length )
                setLoaded( true )
            })()
        }
    },[loaded, products])

    const loadProducts = async (list) => {
        // const response = await fetch('/api/cart', {
        //   method:'post',
        //   body:JSON.stringify({
        //     list
        //   })
        // })
        // const { code, data } = await response.json()
        // return code==0 ? data : []
        return list.map( id => $products.find( product => product.id == id ))
    }

    const updateQuantity = id => value => {
        const oldQuantity = Cart.quantity( id )
        if( value === 0 ) {
            Cart.remove(id, oldQuantity)
        } else {
            Cart.add(id, value - oldQuantity)
        }
        setLoaded( false )
    }

    return {products, updateQuantity, quantity}
}