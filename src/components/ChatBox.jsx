

export default function ChatBox(){
    const currentUser = 'zenx5'
    const items = [
        { id:1, username: 'zenx5', message:'Hola'},
        { id:1, username: 'admin', message:'Hola'},
        { id:1, username: 'jjosem', message:'Hola'},
    ]

    return (
        <section className="w-full m-1 p-2 border border-slate-300 rounded-md h-[300px] relative">
            <ul className="overflow-y-auto h-full w-full m-1 p-1">
                <li className="text-center">
                    Chat
                </li>
                { items.map( item => <li className={"mb-1 flex flex-row " + (currentUser===item.username ? "justify-end" : "justify-start")} key={item.id}>
                    <span className="flex flex-col w-fit bg-blue-100 rounded-full px-5">
                        <span className="font-bold after:content-[':'] first-letter:uppercase lowercase">{item.username}</span>
                        <span className="">{item.message}</span>
                    </span>
                </li>)}
            </ul>
            <form className="absolute bottom-0 left-0 right-0 p-4 flex height-10">
                <input placeholder="write a message" className="rounded-full border border-slate-300 px-3 py-1 m-2 flex-1" />
                <input type="button" value="send" className="rounded-lg border border-green-300 px-3 py-1 m-2 bg-green-300 hover:bg-green-400" />
            </form>

        </section>
    )
}