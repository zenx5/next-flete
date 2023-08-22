import { NextResponse } from 'next/server';


export async function GET(request, { params }) {
    const { id } = params

    return NextResponse.json({ code: 0, data:{
        id:id,
        date: "March 24, 2021",
        datetime: "2021-03-24",
    } })
}