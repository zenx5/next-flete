import { ROUTER_PATH } from '@/tools/constants';
import { NextResponse } from 'next/server';


export async function POST(request) {
    const id = 1 // ID de la orden
    const url = new URL(ROUTER_PATH.SUCCESS+'/'+id, request.url)

    return NextResponse.redirect(url, { status: 303 })
}