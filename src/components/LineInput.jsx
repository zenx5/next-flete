export default function LineInput({ className, label, value }) {

    return <span className={"mx-auto m-none border border-gray-400 rounded-l-lg rounded-r-lg flex flex-row items-center w-full h-auto !overflow-hidden "+className}>
        <label className="p-2 pr-4 w-1/3   text-right text-gray-600 font-bold   bg-gray-200">{label ?? '-'}</label>
        <input type="text" defaultValue={value} className="p-2 pl-4 w-2/3 h-full text-gray-600 italic   bg-white" disabled/>
    </span>
}