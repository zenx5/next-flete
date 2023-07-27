export default function Layout({ children }){

    return <main className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <form className="px-4 py-8 border-2 border-blue-500 rounded-md shadow-md shadow-gray-400 bg-white">
            {children}
        </form>
    </main>
}