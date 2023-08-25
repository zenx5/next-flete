import { removeUser } from '@/tools/actions';
import { ROUTER_PATH } from '@/tools/constants';
import { NextResponse } from 'next/server';


export async function GET(request) {
    await removeUser()

    const url = new URL(ROUTER_PATH.HOME, request.url)

    return NextResponse.redirect(url, { status: 303 })
}