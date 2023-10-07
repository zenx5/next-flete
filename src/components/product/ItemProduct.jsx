"use client";
import { useRouter } from 'next/navigation';

import AddToCart from "./AddToCart"
import Price from "./Price"
import BuyNow from "./AuctionUp"
import { ROUTER_PATH } from '@/tools/constants';

export default function ItemProduct({ product }) {
    const router = useRouter();

    const handlerOpenDetailProduct = (id) => (event) => {
        event.preventDefault();
        if (['BUTTON', 'path', 'svg'].includes(event.target.nodeName)) return;
        else router.push(`${ROUTER_PATH.PRODUCTS}/${id}`)
    }

    const classRounded = "rounded-tl-xl rounded-bl-xl md:rounded-tr-xl md:rounded-bl-none"

    return <a
        onClick={handlerOpenDetailProduct(product.id)}
        className="group bg-white rounded-xl shadow hover:shadow-2xl flex md:block">
        <span
            className={"block p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white xl:aspect-h-8 xl:aspect-w-7 border-b-2 border-b-lightgray " + classRounded}>
            <AddToCart
                id={product.id}
                classNameContainer="flex w-full h-0 justify-end px-3"
                classNameIcon="text-right relative top-2.5 h-8 w-8 flex-shrink-0 text-blue-400 bg-white active:bg-blue-100 opacity-50 rounded-full p-1 hover:opacity-100 hover:text-blue-500" />
            <img
                src={product.images?.at(0)?.src}
                alt={product.images?.at(0)?.alt}
                className={`h-full w-full object-cover object-center ${classRounded}`}
            />
        </span>
        <div className="flex flex-col justify-between px-3 pb-4 ">
            <h3 className="mt-1 text-sm text-gray-800">{product.name}</h3>
            {/* <span className="block text-gray-500 text-sm">{product.description.slice(0,100)}</span> */}
            <Price price={product.price} regularPrice={product.regularPrice} />
            <BuyNow id={product.id} className="flex justify-center w-full text-sm text-blue-400 hover:text-blue-500 hover:bg-blue-100 rounded-md" />
        </div>
    </a>
}