import Price from "./Price"
import AddToCart from "./AddToCart"

export default function CardRelatedProduct({product}) {

    return <div key={product.id}>
        <div className="relative  pb-2 border-b-2 border-gray-300 md:border-none">
            <div className="relative h-72 w-full overflow-hidden rounded-lg ">
                <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="relative mt-4 flex flex-row gap-2 items-center md:flex-col md:items-start">
                <h3 className="text-sm font-medium text-gray-900 w-1/2 md:w-full">{product.name}</h3>
                <AddToCart
                    id={product.id}
                    label="Agregar al Carrito"
                    classNameContainer="p-3 w-1/2 md:w-full text-blue-400 border-2 border-blue-400 rounded-md hover:text-blue-500 hover:bg-blue-100"
                />
                
            </div>
            <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <Price price={product.price} regularPrice={product.regularPrice}/>
            </div>
        </div>
    </div>
}