import { NextRequest, NextResponse } from 'next/server';


export async function GET(request, {params}) {
    const { term } = params

    if( "Octavio Martinez".includes(term) ){
        return NextResponse.json({ code:0, data:{
            nombre: "Octavio Martinez",
            cedula: "18.123.456",
            telefono: "0429-123-4567",
            email: "Octavio@Martinez",
            direccion: {
                estado: "Sucre",
                municipio: "Cajigal",
                ciudad: "Carupano",
                parroquia: "Universidad",
                sector: "Acarigua",
                casa: "#28",
                detalles1: "...",
                detalles2: "...",
            },
            items: [
                { nombre: 'Articulo 1', precio:'10 $' },
                { nombre: 'Articulo 2', precio:'10 $' },
                { nombre: 'Articulo 3', precio:'10 $' },
                { nombre: 'Articulo 4', precio:'10 $' },
                { nombre: 'Articulo 5', precio:'10 $' },
                { nombre: 'Articulo 6', precio:'10 $' },
            ],
            itemsTotal: '60 $'
        } })
    } else {
        return NextResponse.json({ code:1, data: null })
    }

    
}