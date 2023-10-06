import TableProduct from './TableProduct';

export default function Products() {
    const page = 1
    const min = 1
    const max = 5
    return (
        <main className="flex min-h-screen flex-col bg-slate-100">
            <div className="w-2/3 mx-auto mt-10">
                <div>
                    <div className="flex flex-row items-center border border-gray-200 hover:border-gray-900 rounded-lg py-2 px-4 my-5 gap-5 bg-white">
                        <SearchIcon />
                        <input type="text" className="outline-none p-2 w-full" placeholder="Buscar..."/>
                    </div>
                </div>
                <TableProduct />
                <div className="flex flex-row items-center justify-end gap-10">
                    <div className="p-4 flex flex-row gap-2">
                        <span>Rows per page</span>
                        <select className="outline-none">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={-1}>All</option>
                        </select>
                    </div>
                    <div className="p-4">
                        {min} - {max} of { "products.length" }
                    </div>
                    <div className="flex flex-row p-4">
                        <button><ArrowLeft /></button>
                        <button><ArrowRight /></button>
                    </div>
                </div>
            </div>
        </main>
    )
}

const SearchIcon  = () => <svg className="w-5 h-5" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><g id="iconifyReact289"><g id="iconifyReact290"><path id="iconifyReact291" fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"></path></g></g></svg>

const ArrowLeft = () => <svg className="w-8 h-8" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg>

const ArrowRight = () => <svg className="w-8 h-8" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>