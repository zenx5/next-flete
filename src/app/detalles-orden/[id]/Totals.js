export default function Totals({ totals }) {
    return (
        <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-7 lg:mt-0 lg:pr-8">
            <div className="flex items-center justify-between pb-4">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium text-gray-900">{ totals.subtotal }</dd>
            </div>
            <div className="flex items-center justify-between py-4">
                <dt className="text-gray-600">Shipping</dt>
                <dd className="font-medium text-gray-900">{ totals.shipping }</dd>
            </div>
            <div className="flex items-center justify-between py-4">
                <dt className="text-gray-600">Tax</dt>
                <dd className="font-medium text-gray-900">{ totals.tax }</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
                <dt className="font-medium text-gray-900">Order total</dt>
                <dd className="font-medium text-indigo-600">{ totals.total }</dd>
            </div>
        </dl>
    )
}