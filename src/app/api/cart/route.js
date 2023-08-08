import { NextResponse } from 'next/server';

import { products } from '../products/products.mockup';


export async function GET(request) {
    return NextResponse.json({ code:0, data: products })
}

export async function POST(request) {
    const { list } = await request.json()

    const productCart = list.map( id => products.find( product => product.id==id ) )

    return NextResponse.json({ code:0, data:productCart })
}