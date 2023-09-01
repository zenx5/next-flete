export default function Price({ regularPrice, price }) {

    const mainPrice = price ? price : regularPrice;

    return <span className="mt-2">
        <p className="leading-none text-sm text-left w-auto font-medium text-gray-900">{mainPrice}</p>
    </span>
}