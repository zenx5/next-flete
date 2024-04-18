
export function middleware(request) {
    console.log(request.pastUrl.pathname)
    if( /confirmar-compra\/[0-9]{1,}/.test(request.pastUrl.pathname) ) {
        return NextResponse.redirect( new URL('usuario/perfil', request.origin) )
    }
}

export const config = {
    matcher: /^\/confirmar-compra\/[0-9]{1,}/
}