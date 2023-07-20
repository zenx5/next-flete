import { NextRequest, NextResponse } from 'next/server';

import { products } from '../products.mockup';


export async function GET(request, { params }) {
    const { id } = params
    const product = products.find( product => product.id==id )
    if ( product ) return NextResponse.json({ code:0, data:product })
    return NextResponse.json({ code:1, data:null })
}