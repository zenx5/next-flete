import Image from "next/image"
import { UserIcon } from "@/components/icons"
import { StarIcon } from '@heroicons/react/20/solid'
import Staring from "@/components/Staring"


export default function Comments({ items }) {

    return <section className="w-full py-12">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="grid gap-1">
                    <h1 className="text-2xl font-bold tracking-tight">Recommendaciones</h1>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                { items.map( item => <div key={item.id} className="flex flex-col justify-between items-start gap-2 group border border-gray-300 hover:border-gray-500 rounded-lg px-4 py-2">
                    <span className="flex flex-row items-center w-full justify-between gap-1 border-b border-gray-300 pb-2 mb-2">
                        <UserIcon className="w-10 h-10 text-opacity-70 text-black group-hover:text-orange-flete"/>
                        <h3 className="font-semibold">{item?.name}</h3>
                        <span></span>
                    </span>
                    <p className="text-sm leading-none py-2">{item?.content}</p>
                    <span className="flex flex-row justify-between w-full border-t border-gray-300 pt-2">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={ item.rating > rating ? 'text-gray-400 group-hover:text-orange-flete h-5 w-5 flex-shrink-0' : 'text-gray-200 h-5 w-5 flex-shrink-0'}
                            aria-hidden="true"
                            />
                        ))}
                    </span>
                </div>)}
            </div>
        </div>
    </section>
}