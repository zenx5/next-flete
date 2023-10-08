import { setUser } from '@/tools/actions';
import { ROUTER_PATH } from '@/tools/constants';
import { NextResponse } from 'next/server';
import { actionSearch } from '../../../tools/firebase/actions';

export async function POST(request) {
    const form = await request.formData()
    const redirectToUrl = form.get('redirect') || ROUTER_PATH.HOME

    if( form.get('action')==='login' ) {
      const users = await actionSearch("users", "email", "==", form.get('email'))
      if( users.length > 0 && users[0].password===form.get('password') ) {
        setUser({
          ...users[0],
          password: undefined
        })
        const url = new URL(redirectToUrl, request.url)
        return NextResponse.redirect(url, { status: 303 })
      } else {
        const url = new URL(ROUTER_PATH.LOGIN + '?error=1', request.url)
        return NextResponse.redirect(url, { status: 303 })
      }
    }

    return NextResponse.json({ error: 'Invalid action' })
  }

  export async function GET() {

    const doc = await actionSearch("users", "email", "==", "admin@mail.com")

    return NextResponse.json({
      ...doc[0],
      password:undefined
    })
  }