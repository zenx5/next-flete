

export default function ChatBox(){

    return (
        <section className="w-full m-1 p-2 border border-slate-300 rounded-md h-[300px] relative">
            <ul className="overflow-y-auto h-full w-full m-1 p-1">
                <li>algo aqui</li>
            </ul>
            <form className="absolute bottom-0 left-0 right-0 p-4 flex height-10">
                <input placeholder="write a message" className="rounded-full border border-slate-300 px-3 py-1 m-2 flex-1" />
                <input type="button" value="send" className="rounded-lg border border-green-300 px-3 py-1 m-2 bg-green-300 hover:bg-green-400" />
            </form>

        </section>
    )
}