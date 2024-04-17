"use client"

import { useEffect, useState } from "react"
import { socket } from "../socket"

export default function ChatBox(){
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [isConnected, setIsConnected] = useState(socket.connected)

    useEffect( () => {
        socket.on('message', (msg) => {
            setMessages(prev => [...prev, msg])
        })
        return () => socket.off('message')
    }, [])

    const handlerSend = event => {
        event.preventDefault()
        socket.emit('message', inputValue)
        setInputValue('')
    }


    return (
        <section className="w-full m-1 p-2 border border-slate-300 rounded-md h-[300px] relative">
            <ul className="overflow-y-auto h-full w-full m-1 p-1">
                {
                    messages.map((message, index) => <li key={index} className="text-slate-800">{message}</li>)
                }
            </ul>
            <form onSubmit={handlerSend} className="absolute bottom-0 left-0 right-0 p-4 flex height-10">
                <input value={inputValue} onChange={event=>setInputValue(event.target.value)} placeholder="write a message" className="rounded-full border border-slate-300 px-3 py-1 m-2 flex-1" />
                <input type="button" value="send" className="rounded-lg border border-green-300 px-3 py-1 m-2 bg-green-300 hover:bg-green-400" />
            </form>

        </section>
    )
}