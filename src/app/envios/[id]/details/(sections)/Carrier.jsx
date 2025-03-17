import Staring from "@/components/Staring"

export default function CarrierDetails({ carrier, comments }) {

    return <>
        <div className="w-full h-2/3 divide-y">
            <p className="flex flex-row justify-between px-4 py-1">
                <span className="font-bold">Trasportista:</span>
                <span className="italic text-slate-600">{carrier?.user.name ?? '-'}</span>
            </p>
            <p className="flex flex-row justify-between px-4 py-1">
                <span className="font-bold">Email:</span>
                <span className="italic text-slate-600">{carrier?.user.email ?? '-'}</span>
            </p>
            <p className="flex flex-row justify-between px-4 py-1">
                <span className="font-bold">Telefono:</span>
                <span className="italic text-slate-600">{carrier?.user.phone ?? '-'}</span>
            </p>
        </div>
        <div className="w-full h-1/3">
            <Staring
                average={comments.map( comment => comment.rating ).reduce( (a,e)=>a+e, 0 )/comments.length}
                totalCount={comments.length}
            />
        </div>
    </>
}