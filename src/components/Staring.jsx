import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function Staring({ average, totalCount, onClick }) {
    const [hoverIndex, setHoverIndex] = useState(0)

    function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	}

    const handlerSetHover = ( rating ) => {
        setHoverIndex( rating )
    }

    return <div className="mt-6">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center" onMouseLeave={()=>setHoverIndex(0)}>
            {[0, 1, 2, 3, 4].map((index) => (
                <span key={index} className="h-10" onMouseEnter={()=>handlerSetHover(index + 1)} onClick={()=>onClick(index + 1) }>
                    <StarIcon
                        className={classNames(
                            average > index ? 'text-orange-flete' : 'text-gray-200',
                            'h-10 w-10 flex-shrink-0 relative top-0 z-10 opacity-80'
                        )}
                        aria-hidden="true"
                    />
                    {onClick && <StarIcon
                        key={index}
                        className={ hoverIndex>index ? "relative h-10 w-10 -top-10 blur text-orange-flete z-0" : "hidden relative h-10 w-10 -top-10 z-0"}
                        aria-hidden="true"
                    />}
                </span>
            ))}
            </div>
            <p className="sr-only">{average} out of 5 stars</p>
            <span className="ml-3 text-sm font-medium text-black hover:text-black">{totalCount} reviews</span>
        </div>
    </div>
}