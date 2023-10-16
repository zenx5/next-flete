import { setUser } from '@/tools/actions';
import { ROUTER_PATH } from '@/tools/constants';
import { NextResponse } from 'next/server';
import { actionSearch, actionSave } from '../../../tools/firebase/actions';
import { setError } from '../../../tools/actions';

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
        setError("Email o Contraseña incorrecta", 1)
        const url = new URL(ROUTER_PATH.LOGIN, request.url)
        return NextResponse.redirect(url, { status: 303 })
      }
    }
    else if( form.get('action')==='register' ) {
      const firstname = form.get('firstname')
      const lastname = form.get('lastname')
      const email = form.get('email')
      const password = form.get('password')
      const password_confirmed = form.get('password_confirmed')
      if( password === password_confirmed ) {
        const checkUser = await actionSearch("users", "email", "==", email)
        if( checkUser.length===0 ) {
          const user = {
            name: `${firstname} ${lastname}`,
            firstname,
            lastname,
            email,
            password
          }
          if( await actionSave("users", user) ) {
            const users = await actionSearch("users", "email", "==", email)
            setUser({
              ...users[0],
              password: undefined
            })
            const url = new URL(redirectToUrl, request.url)
            return NextResponse.redirect(url, { status: 303 })
          } else {
            // Usuario no creado
            setError("Usuario no creado", 2)
            const url = new URL(ROUTER_PATH.REGISTER, request.url)
            return NextResponse.redirect(url, { status: 303 })
          }
        }else {
          // email usado
          setError("Email usado", 3)
          const url = new URL(ROUTER_PATH.REGISTER, request.url)
          return NextResponse.redirect(url, { status: 303 })
        }
      }
      else{
        // password no coincide
        setError("Password no coincide", 4)
        const url = new URL(ROUTER_PATH.REGISTER, request.url)
        return NextResponse.redirect(url, { status: 303 })
      }
    }

    return NextResponse.json({ error: 'Invalid action' })
  }

  export async function GET() {

    // const doc = await actionSearch("users", "email", "==", "adsmin@mail.com")

    // return NextResponse.json(doc)
    const response = await actionSave("users", {
      name: `Jhon Doe`,
      firstname:"Jhon",
      lastname:"Doe",
      email:"jdoe@mail.com",
      password:"12345"
    })
    return NextResponse.json(response)
  }