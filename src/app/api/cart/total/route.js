import { NextResponse } from 'next/server';

import { products } from '../../../../tools/mockup/products.mockup';

export async function POST(request) {
    let subtotal = 0, taxes = 0, shipping = 0, total = 0;
    const { list } = await request.json()

    const productCart = list.map( id => products.find( product => product.id==id ) )

    productCart.forEach( product => {
        subtotal += product.realPrice
        total += product.realPrice
    });

    return NextResponse.json({ code:0, data:{
        subtotal, taxes, shipping, total
    } })
}