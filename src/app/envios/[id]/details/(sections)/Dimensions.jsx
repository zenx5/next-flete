export default function Dimensions({ weight, dimensions }) {
    const rowClass = "flex flex-row gap-4 w-full items-center ml-5 py-1"

    return <span className="col-span-1 p-2 flex flex-col items-start gap-1 divide-y">
        <span className={rowClass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:block hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
            <span className="text-sm flex flex-row gap-1 flex-wrap">
                <span className="font-semibold">{ dimensions.width }{ dimensions.unit }</span>
                <span className="">x</span>
                <span className="font-semibold">{ dimensions.height }{ dimensions.unit }</span>
                <span className="">x</span>
                <span className="font-semibold">{ dimensions.large }{ dimensions.unit }</span>
            </span>
        </span>
        <span className={rowClass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:block hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="font-semibold text-sm">{ weight } Kg</span>
        </span>
    </span>
}