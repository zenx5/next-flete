"use client"

import { use, useEffect, useRef, useState } from "react"
import { socket } from "../socket"

export default function ChatBox({productId, user, isOwner, isAssign}){
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [isConnected, setIsConnected] = useState(socket.connected)
    const ref = useRef()


    useEffect( () => {
        if( ref.current ) ref.current.scroll({top: ref.current.scrollHeight})
    }, [messages])

    useEffect( () => {
        socket.on('message', (msg) => {
            setMessages(prev => [...prev, msg])
        })
        return () => socket.off('message')
    }, [])

    const handlerSend = event => {
        event.preventDefault()
        if( inputValue.trim().length===0 ) return
        socket.emit('message', {
            content:inputValue,
            user:{
                id: user.id,
                name: user.name,
                type: isOwner ? 'owner' : (isAssign ? 'assign' : 'admin')
            }
        })
        setInputValue('')
    }

    const getColor = (isCurrent, type) => {
        if( isCurrent ) return "bg-blue-200"
        if( type=='admin') return "bg-yellow-500"
        return "bg-slate-200"
    }


    return (
        <section className="w-full m-1 p-2 border border-slate-300 rounded-md relative">
            <ul className="overflow-y-auto h-[300px] w-full m-1 py-1 px-4 shadow-inner shadow-slate-400 scroll-smooth" ref={ref}>
                <li className="text-center">
                    Chat
                </li>
                { messages.map( (message,index) => <li className={"my-8 h-fit mb-1 flex " + ( message.user.id === user.id ? "justify-end" : "justify-start")} key={index}>
                    <span className="relative block">
                        <span className={"absolute opacity-80 italic text-xs -top-3 font-bold z-10 ml-2 px-2 py-0 rounded-t-lg after:content-[':'] first-letter:uppercase lowercase " + getColor(message.user.id===user.id, message.user.type)}>{message.user.id === user.id ? 'Yo' : message.user.name}</span>
                        <span className={"block m-0 w-full px-5 py-1 shadow-md shadow-slate-400 rounded-lg "  + getColor(message.user.id===user.id, message.user.type)}>{message.content}</span>
                    </span>
                </li>)}
            </ul>
            <form onSubmit={handlerSend} className="p-0 flex height-10">
                <input value={inputValue} onChange={event=>setInputValue(event.target.value)} placeholder="write a message" className="rounded-full border border-slate-300 px-3 py-1 m-2 flex-1" />
                <input type="submit" disabled={inputValue.trim().length===0 || !isOwner && !isAssign && user.type!=='admin'} value="send" className="rounded-lg border border-green-300 px-3 py-1 m-2 bg-green-300 hover:bg-green-400 disabled:text-slate-400 disabled:bg-slate-300 disabled:border-slate-300 text-black" />
            </form>
        </section>
    )
}