export default function LineInput({ className, label, value }) {

    return <span className={"mx-auto m-none flex flex-row items-center w-full "+className}>
        <label className="border border-gray-400 p-2 pr-4 text-right w-1/3 rounded-l-lg bg-gray-200 text-gray-600 font-bold">{label}</label>
        <input type="text" defaultValue={value} className="border border-gray-400 p-2 pl-4 w-2/3 rounded-r-lg text-gray-600 bg-white italic" disabled/>
    </span>
}