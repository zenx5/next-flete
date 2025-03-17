export default function CurrentStatus({ value }){

    return <span className="flex flex-row justify-between items-center pr-4 col-span-1">
        <h3 className="text-xl font-bold">Status</h3>
        <span className="uppercase rounded-full border border-green-400 px-2 bg-green-300 text-green-700 shadow-md shadow-green-400">{ value }</span>
    </span>
}