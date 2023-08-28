import { setUser } from '@/tools/actions';
import { ROUTER_PATH } from '@/tools/constants';
import { NextResponse } from 'next/server';
import { users } from '@/tools/mockup/users.mockup'

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
          token: btoa(`${user.email}:${user.password}`),
          birthdate: user.birthdate,
          phone: user.phone,
          phoneFamily: user.phoneFamily,
          grade: user.grade,
          academic: user.academic,
          nextGrade: user.nextGrade,
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