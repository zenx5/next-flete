import Link from "next/link";

export default function History({ payments = [], orders = []}) {

    return <div className='h-screen w-full col-start-5 col-span-7'>
    <section aria-labelledby="billing-history-heading">
      <div className="bg-white pt-0 shadow sm:overflow-hidden sm:rounded-md">
      <div className="mt-0 divide-y divide-gray-200">
          <div className="space-y-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Historial de Pagos</h3>
            <p className="max-w-2xl text-sm text-gray-500">Mantente al tanto de tus ultimos pagos</p>
          </div>
          <div className="mt-6">
            <dl className="divide-y divide-gray-200">
              {payments.map((payment) => <div key={payment.id} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">{payment.date}</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">{payment.description}</span>
                  <span className="flex-grow">{payment.amount}</span>
                  <span className="flex-grow">{payment.status}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Detalle
                    </button>
                  </span>
                </dd>
              </div>)}
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">8 Proudctos</span>
                  <span className="flex-grow">$370</span>
                  <span className="flex-grow"></span>
                  <span className="flex-grow"></span>
                  <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white pt-6 shadow mt-7 sm:overflow-hidden sm:rounded-md">
          <div className="mt-10 divide-y divide-gray-200">
            <div className="space-y-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Historial de Pedidos</h3>
              <p className="max-w-2xl text-sm text-gray-500">Mantente al tanto de tus ultimos pedidos</p>
            </div>
            <div className="mt-6">
              <dl className="divide-y divide-gray-200">
                {orders.map((order) => <div key={order.id} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">{order.date}</dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">{order.description}</span>
                    <span className="flex-grow">{order.amount}</span>
                    <span className="flex-grow">{order.status}</span>
                    <span className="ml-4 flex-shrink-0">
                      <Link
                        href={`/detalles-orden/${order.id}`}
                        className="rounded-md bg-white font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Detalle
                      </Link>
                    </span>
                  </dd>
                </div>)}
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                  <dt className="text-sm font-medium text-gray-500"></dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">8 Proudctos</span>
                    <span className="flex-grow">$370</span>
                    <span className="flex-grow"></span>
                    <span className="flex-grow"></span>
                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
      </div>
    </section>
  </div>
}