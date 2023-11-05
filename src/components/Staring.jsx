import { StarIcon } from '@heroicons/react/20/solid'

export default function Staring() {

    function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	}

	const reviews = { href: '#', average: 4, totalCount: 117 }

    return <div className="mt-6">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                    key={rating}
                    className={classNames(
                        reviews.average > rating ? 'text-orange-flete' : 'text-gray-200',
                        'h-10 w-10 flex-shrink-0'
                    )}
                aria-hidden="true"
                />
            ))}
            </div>
            <p className="sr-only">{reviews.average} out of 5 stars</p>
            <a href={reviews.href} className="ml-3 text-sm font-medium text-black hover:text-black">{reviews.totalCount} reviews</a>
        </div>
    </div>
}