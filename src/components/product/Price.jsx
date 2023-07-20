export default function Price({ regularPrice, price }) {

    const mainPrice = price ? price : regularPrice;

    return <span className="mt-2">
        <small className="leading-none text-xs line-through text-gray-500">{mainPrice!==regularPrice ? regularPrice : '-'}</small>
        <p className="leading-none text-lg text-left font-medium text-gray-900">{mainPrice}</p>
    </span>
}