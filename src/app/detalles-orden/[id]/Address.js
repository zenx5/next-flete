export default function Address( { name, address, city, province, postalCode }) {
    return (
        <div>
            <dt className="font-medium text-gray-900">Dirección</dt>
            <dd className="mt-3 text-gray-500">
            <span className="block">{ name }</span>
            <span className="block">{ address }</span>
            <span className="block">{ city }, { province } { postalCode }</span>
            </dd>
        </div>
    )
}