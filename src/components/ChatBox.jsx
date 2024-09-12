"use client"

import { useEffect, useRef, useState } from "react"
import ChatModel from "../tools/models/ChatModel"


export default function ChatBox({productId, user, isOwner, isAssign}){
    const [chatId, setChatId] = useState(null)
    const [hasAdmin, setHasAdmin] = useState(false)
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const ref = useRef()

    useEffect(()=>{
        ChatModel
            .search('productId', productId )
            .then( result => {
                const [ chat ] = result
                if( !chat ) return
                console.log( chat?.messages )
                setHasAdmin(chat?.hasAdmin)
                setMessages(chat?.messages)
                // if( chatId===null ) return
                setChatId(chat.id)
            })
    },[productId, chatId])

    useEffect(()=>{
        if( !chatId || chatId==='new' ) return
        ChatModel.onChange( chat => {
            if( !chat?.messages ) return
            setHasAdmin(chat?.hasAdmin)
            setMessages( chat?.messages )
            setChatId(chat.id)
        }, chatId )
    },[chatId])



    useEffect( () => {
        if( ref.current ) ref.current.scroll({top: ref.current.scrollHeight})
    }, [messages])

    const handlerSend = event => {
        event.preventDefault()
        if( inputValue.trim().length===0 ) return
        const sender = {
            id: user.id,
            name: user.name,
            type: isOwner ? 'owner' : (isAssign ? 'assign' : 'admin')
        }
        const message = {content: inputValue, user: sender, date: new Date().toISOString()}
        if( chatId ) {
            ChatModel.put(chatId, {
                productId,
                hasAdmin,
                messages: [...messages, message]
            })
        }
        else {
            ChatModel.post({
                productId,
                hasAdmin,
                messages: [message]
            })
            setChatId('new')
        }
        setInputValue('')
    }

    const getColor = (isCurrent, type) => {
        if( isCurrent ) return "bg-blue-200"
        if( type=='admin') return "bg-yellow-500"
        return "bg-slate-200"
    }

    const getAdmin = () => {
        console.log(messages)
        setHasAdmin(true)
        const sender = {
            id: user.id,
            name: "Control",
            type: 'admin'
        }
        const message = {content: `Admin solicitado por ${user.name}`, user: sender, date: new Date().toISOString()}
        if( chatId ) {
            ChatModel.put(chatId, {
                productId,
                hasAdmin:true,
                messages: [...messages, message]
            })
        }
        else {
            ChatModel.post({
                productId,
                hasAdmin:true,
                messages: [message]
            })
            setChatId('new')
        }
    }

    return (
        <section className="w-full m-1 p-2 border border-slate-300 rounded-md relative">
            { !hasAdmin && <span className="flex flex-row justify-between items-center gap-5">
                <span>Solicitar un Administrador</span>
                <button onClick={getAdmin} className="bg-green-500 text-white font-bold rounded px-2 py-1">Solicitar</button>
            </span>}
            <ul className="overflow-y-auto h-[300px] w-full m-1 py-1 px-4 shadow-inner shadow-slate-400 scroll-smooth" ref={ref}>
                <li className="text-center">
                    Chat
                </li>
                { messages?.map( (message,index) => <li className={`my-8 h-fit mb-1 flex ${message.user.name==="Control" ? "justify-center" : (`${message.user.id === user.id ? "justify-end" : "justify-start"}`)}  `} key={index}>
                    <span className="relative block">
                        { message.user.name!=="Control" && <span className={"absolute opacity-80 italic text-xs -top-3 font-bold z-10 ml-2 px-2 py-0 rounded-t-lg after:content-[':'] first-letter:uppercase lowercase " + getColor(message.user.id===user.id, message.user.type)}>{message.user.id === user.id ? 'Yo' : message.user.name}</span>}
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