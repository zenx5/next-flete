export default function InputSearch(props) {
    return <span className="border border-blue-400 p-1 px-2 mx-auto flex flex-row items-center w-fit rounded-lg">
        <input type="text" className="border-none outline-none p-1" {...props} />
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </button>
    </span>
}