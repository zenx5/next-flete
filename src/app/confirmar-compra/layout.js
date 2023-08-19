import ActionsDetails from "./Details/ActionsDetails";
import PaymentDetails from "./Details/PaymentDetails";
import ShippingAddress from "./Details/ShippingAddress";
import PaymentsAddress from "./Details/PaymentsAddress";

export default async function CheckoutPage({ children }) {

  const details = [
    { label: "Detalles de pago", component: PaymentDetails },
    { label: "Dirreción de envio", component: ShippingAddress },
    { label: "Dirreción de facturacion", component: PaymentsAddress }
  ]


  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Detalles de la orden</h2>
            { children }
          </div>

          <div className="mx-auto w-full max-w-lg">

            <form>
              <h2 className="text-lg font-bold text-gray-900">Informacion de Contacto</h2>

              <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Correo Electronico
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Número de Telefono
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black "
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                  He leído y acepto los <b>terminos y condiciones</b>
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
              >
                Continue
              </button>
            </form>
            <div className="mt-10 divide-y divide-gray-200 border-b border-t border-gray-200">
              {
                details.map( ({label, component}) =>
                  <ActionsDetails key={label} label={label} className="w-full py-6 text-left text-lg font-medium text-gray-500">
                    {component()}
                  </ActionsDetails>
                )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
