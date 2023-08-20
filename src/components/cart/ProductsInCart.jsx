"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Cart from "@/tools/cart.fake"
import ItemProducInCart from "./ItemProductInCart"
import TotalCart from "./TotalCart"


export default function ProductsInCart({ id }) {
    const [loaded, setLoaded] = useState( false )
    const [products, setProducts] = useState([])
    const [quantity, setquantity] = useState(1)
    const [subtotal, setsubtotal] = useState(0)
    const [taxes, settaxes] = useState(0)
    const [shipping, setshipping] = useState(0)
    const [total, settotal] = useState(0)

    const router = useRouter()

    useEffect(()=>{
      if( products.length===0 && !loaded ) {
        (async ()=>{
          const listIds = id ? [id] : Cart.get().index
          const response = await loadProducts( listIds )
          if ( !response ) {
            router.back()
          } else {
            setProducts( prev => response )
          }
          setLoaded( true )
        })()
      }
    },[loaded, products, id, router])

    useEffect( ()=> {
      let _subtotal = 0, _total = 0;
      products.forEach( product => {
        _subtotal += product.realPrice * (id ? quantity : Cart.quantity(product.id))
        _total += product.realPrice * (id ? quantity : Cart.quantity(product.id))
      })
      setsubtotal( prev => _subtotal )
      settotal( prev => _total )
    },[setsubtotal, settotal, products, id, quantity])

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

    const getQuantity = (item) => {
      return id ? quantity : Cart.quantity(item)
    }

    const handlerQuantity = (item) => (value) => {
      if( id ) {
        setquantity( prev => value )
      } else {
        const oldQuantity = getQuantity( item )
        Cart.add(item, value - oldQuantity)
      }
    }

    const handlerRemoveItem = (item) => () => {
      if( id ) {
        router.push(ROUTER_PATH.PRODUCTS)
      } else {
        Cart.remove(item, getQuantity( item ) )
        setProducts( prev => {
          return prev.filter( product => product.id!=item )
        })
      }
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