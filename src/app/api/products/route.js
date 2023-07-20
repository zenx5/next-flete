import { NextRequest, NextResponse } from 'next/server';

import { products } from './products.mockup';


export async function GET(request) {
    return NextResponse.json({ code:0, data:products })
}