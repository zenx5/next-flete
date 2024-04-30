import { NextResponse } from "next/server";

export async function POST(request) {
    const { content, user } = await request.json();
    const { id, name, type } = user;
    console.log('message received', content, user)
    return NextResponse.json({ error:false, content, user });
}