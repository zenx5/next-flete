"use client"

import Cart from "@/tools/cart.fake"
import { useEffect, useState } from "react"
import ItemProducInCart from "./ItemProductInCart"
import TotalCart from "./TotalCart"

export default function ProductsInCart() {
    const [loaded, setLoaded] = useState( false )
    const [products, setProducts] = useState([])
    const [subtotal, setsubtotal] = useState(0)
    const [taxes, settaxes] = useState(0)
    const [shipping, setshipping] = useState(0)
    const [total, settotal] = useState(0)

    useEffect(()=>{
      if( products.length===0 && !loaded ) {
        (async ()=>{
          const { index } = Cart.get()
          const response = await loadProducts(index)
          setProducts( prev => response )
          setLoaded( true )
        })()
      }
    },[loaded, products])


    useEffect( ()=> {
      let _subtotal = 0, _total = 0;
      products.forEach( product => {
        _subtotal += product.realPrice * Cart.quantity(product.id)
        _total += product.realPrice * Cart.quantity(product.id)
      })
      setsubtotal( prev => _subtotal )
      settotal( prev => _total )
    },[products])

    const loadProducts = async (list) => {
      const response = await fetch('/api/cart', {
        method:'post',
        body:JSON.stringify({
          list
        })
      })
      const { code, data } = await response.json()
      return data
    }

    const getQuantity = (id) => {
      return Cart.quantity(id)
    }

    const handlerQuantity = (id) => (value) => {
      const oldQuantity = getQuantity( id )
      Cart.add(id, value - oldQuantity)
      updateTotal()
    }

    const handlerRemoveItem = (id) => () => {
      Cart.remove(id, getQuantity( id ) )
      setProducts( prev => {
        return prev.filter( product => product.id!=id )
      })
      updateTotal()
    }

    const updateTotal = () => {
      let _subtotal = 0, _total = 0;
      products.forEach( product => {
        _subtotal += product.realPrice * Cart.quantity(product.id)
        _total += product.realPrice * Cart.quantity(product.id)
      })
      setsubtotal( prev => _subtotal )
      settotal( prev => _total )
    }

    return <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {products.map((product) =>
          <ItemProducInCart
            key={product.id}
            product={product}
            quantity={getQuantity( product.id )}
            onChange={handlerQuantity(product.id)}
            onRemove={handlerRemoveItem(product.id)}
          />)}
      </ul>
      <TotalCart
        subtotal={subtotal}
        taxes={taxes}
        shipping={shipping}
        total={total}
      />
    </div>
}