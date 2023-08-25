import { removeUser, setUser } from '@/tools/actions';
import { ROUTER_PATH } from '@/tools/constants';
import { NextResponse } from 'next/server';

const users = [
    {
        id: 1,
        name: 'John Doe', 
        email: 'jdoe@mail.com',
        password: '123456'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jandoe@mail.com',
        password: '123456'
    }
]

export async function POST(request) {
    const form = await request.formData()
    const redirectToUrl = form.get('redirect') || ROUTER_PATH.HOME

    if( form.get('action')==='login' ) {
      const user = users.find( user => user.email===form.get('email') && user.password===form.get('password') )
      if( user ) {
        setUser({
          id: user.id,
          name: user.name,
          email: user.email,
          token: btoa(`${user.email}:${user.password}`)
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