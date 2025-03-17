export default function CardCoor({ location }) {
    return <span className="col-span-1 p-2 flex flex-col items-center">
        <span className="font-bold">{ location.name }</span>
        <span className="italic text-xs">({ location.position.lat }, { location.position.lng })</span>
    </span>
}