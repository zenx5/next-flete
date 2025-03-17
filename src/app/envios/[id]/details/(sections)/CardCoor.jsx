"use client"

export default function CardCoor({ location, onMouseStart, onMouseEnd }) {
    const handleMouseUp = () => onMouseStart && onMouseStart()
    const handleMouseLeave = () => onMouseEnd && onMouseEnd()

    return <span className="col-span-1 p-2 flex flex-col items-center" onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
        <span className="font-bold">{ location.name }</span>
        <span className="italic text-xs">({ location.position.lat }, { location.position.lng })</span>
    </span>
}